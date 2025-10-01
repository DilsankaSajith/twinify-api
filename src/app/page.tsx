import Demo from '@/components/demo';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Page = () => {
  const codeSnippet = `
await fetch('https://twinifyapi.netlify.app/api/similarity', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        text1: 'I love coding',
        text2: 'Coding is my middle name',
    }),
});`;

  return (
    <>
      <section className="relative py-24 sm:py-32">
        <MaxWidthWrapper>
          <div className="mx-auto sm:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="mx-auto maw-w-lg text-center sm:text-left flex flex-col items-center lg:items-start">
              <h1 className="tracking-tight sm:text-left mt-10 font-bold !leading-[4rem] text-gray-900 text-5xl md:text-7xl text-pretty whitespace-nowrap">
                TwinifyAPI
              </h1>
              <p className="mt-4 lg:mt-8 text-lg lg:pr-10 text-center lg:text-left text-balance md:text-wrap text-gray-600">
                Comparing text meanings can{' '}
                <span className="bg-[#4C6f92] px-1 text-gray-50">
                  solve countless
                </span>{' '}
                <span className="bg-[#4C6f92] px-1 text-gray-50 mr-1">
                  problems
                </span>
                — and our tool makes it happen in a single request. Simple,
                powerful, and incredibly handy.
              </p>
              <ul className="mt-8 space-y-2 font-medium flex flex-col items-center sm:items-start">
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="size-5 shrink-0 text-[#4C6f92]" />
                  Plagarism detection
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="size-5 shrink-0 text-[#4C6f92]" />
                  Duplicated bug reports detection
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="size-5 shrink-0 text-[#4C6f92]" />
                  Chat-bot/Virtual assist
                </li>
              </ul>
            </div>
            <div className="flex flex-col bg-gray-900 shadow-2xl rounded-tl-xl rounded-br-xl overflow-hidden min-h-[30rem] mt-6 lg:mt-0">
              <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                  <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                    page.tsx
                  </div>
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="max-h-[30rem]">
                  <SyntaxHighlighter
                    language="typescript"
                    style={{
                      ...vscDarkPlus,
                      'pre[class*="language-"]': {
                        ...vscDarkPlus['pre[class*="language-"]'],
                        background: 'transparent',

                        overflow: 'hidden',
                      },
                      'code[class*="language-"]': {
                        ...vscDarkPlus['code[class*="language-"]'],
                        background: 'transparent',
                      },
                    }}
                  >
                    {codeSnippet}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="relative py-24 sm:py-32">
        <MaxWidthWrapper>
          <Demo />
        </MaxWidthWrapper>
      </section>

      <section className="relative py-8 sm:py-16 border-t border-gray-200 bg-white">
        <MaxWidthWrapper className="flex items-center justify-center">
          <div className="flex items-center flex-col gap-1.5 justify-center text-gray-600 tracking-tight text-sm/7">
            <p>A project created for learning purpose</p>
            <p>
              Page design inspiration from{' '}
              <Link
                href="https://www.profanity.dev/"
                target="_blank"
                className="underline"
              >
                profanity
              </Link>
            </p>
            <p className="text-xs mt-2 text-gray-400">&copy; 2025 TwinifyAPI</p>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default Page;
