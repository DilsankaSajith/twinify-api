'use client';

import { SelectTrigger } from '@radix-ui/react-select';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { ChevronsUpDownIcon } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'sonner';
import { sampleData } from '@/lib/sample-data';

const Demo = () => {
  const [responseData, setResponseData] = useState<{
    score: number;
    label: string;
  }>({ score: 0, label: '' });

  const [requestData, setRequestData] = useState<{
    text1: string;
    text2: string;
  }>({ text1: '', text2: '' });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const makeApiRequest = async () => {
    if (requestData.text1 === '' || requestData.text2 === '') {
      return toast.error('Please add some text to check');
    }

    try {
      setIsLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/similarity`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text1: requestData.text1,
            text2: requestData.text2,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      setResponseData(data);
      setIsLoading(false);
      console.log(requestData);
    } catch (err: any) {
      console.log(err?.data?.message || err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectChange = (value: string) => {
    const relevantSampleData = sampleData.find((data) => data.type === value);
    setRequestData({
      text1: relevantSampleData?.text1!,
      text2: relevantSampleData?.text2!,
    });
  };

  return (
    <div className="relative flex flex-col items-center justify-between bg-[#E5EBF3] border border-gray-300 lg:max-w-3xl mx-auto rounded-md p-6">
      <Image
        src="/decorator-1.png"
        alt="decorator text"
        width={200}
        height={200}
        className="absolute -right-0 -top-20 sm:-right-6"
      />

      <div className="w-full space-y-6 sm:grid sm:grid-cols-2 gap-6 ">
        <Textarea
          className="bg-white w-full h-50"
          placeholder="Enter your first text here..."
          value={requestData.text1}
          onChange={(e) =>
            setRequestData({ ...requestData, text1: e.target.value })
          }
        />
        <Textarea
          className="bg-white w-full h-50"
          placeholder="Enter your second text here..."
          value={requestData.text2}
          onChange={(e) =>
            setRequestData({ ...requestData, text2: e.target.value })
          }
        />
      </div>

      <div className="flex items-center justify-between w-full gap-1.5">
        <div className="items-center hidden lg:flex gap-2">
          <Badge className="bg-gray-700 mt-6 sm:mt-0">POST</Badge>
          <div className="w-px h-5 bg-gray-300" />
          <p className="font-semibold tracking-tight text-gray-900">
            http://localhost:3000/api/similarity
          </p>
        </div>
        <div className="mt-6 sm:mt-0 flex items-center gap-2 ml-auto">
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger className="w-[180px] bg-white rounded-sm px-2 py-1.5 border border-gray-300 flex items-center justify-between">
              <SelectValue placeholder="Select data" />
              <ChevronsUpDownIcon className="size-4 text-gray-500" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="plagarism">Plagarism</SelectItem>
              <SelectItem value="bug_report">Bug reports</SelectItem>
              <SelectItem value="virtual_assist">Virtual assist</SelectItem>
              <SelectItem value="not_relevant">Not relevant</SelectItem>
              <SelectItem value="maybe_relevant">Maybe relevant</SelectItem>
            </SelectContent>
          </Select>
          <Button
            className="bg-[#E11D48] hover:bg-[#D91D46] cursor-pointer"
            onClick={() => makeApiRequest()}
            disabled={isLoading}
          >
            {isLoading ? 'Checking...' : 'Similarity check'}
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full flex-1 bg-[#E5EBF3] p-10 h-full m-5 mb-0 border-2 border-dashed border-gray-300 rounded-lg ">
        <p className="font-semibold text-gray-950 uppercase text-md tracking-tight text-pretty">
          {responseData?.label === 'similar'
            ? '🚨Pretty sure these are similar texts🚨'
            : responseData?.label === 'maybe'
            ? '🤔Those texts maybe similar🤔'
            : '✨Those texts are not relevant✨'}
        </p>
        <span className="text-sm font-medium text-gray-600 mt-2">
          score (higher is more similar): {responseData.score.toFixed(3)}
        </span>
      </div>
    </div>
  );
};

export default Demo;
