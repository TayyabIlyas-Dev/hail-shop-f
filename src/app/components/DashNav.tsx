import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { HailLogo } from '@/public';
import { DropdownMenuDemo } from './DashNav-SideMenu';
import { SignIn, UserButton } from '@clerk/nextjs';

const DashNav = () => {
  return (
    <div>
      <header className='flex cursor-pointer bg-white border-b-2 px-4 sm:px-10 font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
        <div className='flex flex-wrap items-center justify-between gap-4 w-full max-w-screen-xl mx-auto'>
          <Link href="/dashboard2" className="logo">
            <Image
              src={HailLogo}
              height="60"
              width="100"
              alt="HAIL"
              className="object-contain h-[60px] py-2  hover:scale-x-110 transition-all duration-500"
            />
          </Link>

          <div id="collapseMenu" className="max-lg:hidden lg:!flex lg:items-center">
            <ul className='lg:!flex lg:gap-x-5 font-semibold max-lg:space-y-3'>
              <li className='max-lg:border-b max-lg:py-3 px-3'>
                <Link href='/dashboard2'>
                  <div className='text-black hover:text-white rounded-xl transition-all duration-200 hover:bg-[#000000] hover:px-4 text-base flex items-center flex-col justify-center gap-1'>
                    {/* <AiFillHome className='text-xl' /> */}
                    Home
                  </div>
                </Link>
              </li>
              <li className='max-lg:border-b max-lg:py-3 px-3'>
                <Link href='/dashboard2/analytics'>
                <div className='text-black hover:text-white rounded-xl transition-all duration-200 hover:bg-[#000000] hover:px-4 text-base flex items-center flex-col justify-center gap-1'>
                {/* <MdDashboard className='text-xl' /> */}
                    Analytics
                  </div>
                </Link>
              </li>
              <li className='max-lg:border-b max-lg:py-3 px-3'>
                <Link href='/dashboard2/profile'>
                <div className='text-black hover:text-white rounded-xl transition-all duration-200 hover:bg-[#000000] hover:px-4 text-base flex items-center flex-col justify-center gap-1'>
                {/* <MdPerson className='text-xl' /> */}
                    Profile
                  </div>
                </Link>
              </li>
              <li className='max-lg:border-b max-lg:py-3 px-3'>
                <Link href='/'>
                <div className='text-black hover:text-white rounded-xl transition-all duration-200 hover:bg-[#000000] hover:px-4 text-base flex items-center flex-col justify-center gap-1'>
                {/* <LuSettings className='text-xl' /> */}
                    Store
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <div className='flex items-center max-lg:ml-auto'>
            <input type="text" placeholder="Search anything..."
              className="bg-transparent border border-gray-400 text-sm w-full px-4 text-black rounded h-9 outline-none max-sm:hidden"></input>
            <div className='pl-3 pt-1'>
            <UserButton/>
            {/* <SignIn/> */}

            </div>
            <div>
              <DropdownMenuDemo />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default DashNav;
