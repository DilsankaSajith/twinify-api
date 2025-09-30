import Link from 'next/link';
import MaxWidthWrapper from './max-width-wrapper';
import { buttonVariants } from './ui/button';
import { Heart } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center font-semibold">
            <Image
              src="/busts-emoji.png"
              alt="logo"
              width={28}
              height={28}
              className="mr-1.5 -mt-2"
            />
            TwinifyAPI
          </Link>

          <Link
            href="https://github.com/DilsankaSajith/twinify-api.git"
            target="_blank"
            className={buttonVariants({ variant: 'secondary' })}
          >
            Star on Github <Heart className="sie-4 ml-1.5 fill-red-500" />
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
