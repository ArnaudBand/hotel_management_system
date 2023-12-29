/** @format */

import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import { MdDarkMode } from 'react-icons/md';

const Header = () => {
  return (
    <header className='py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap justify-between items-center'>
      <div className='flex items-center w-full md:w-2/3'>
        <Link
          href={'/'}
          className='font-black text-[#f27405]'>
          Mestil Hotel
        </Link>
        <ul className='flex items-center ml-5'>
          <li className='flex items-center'>
            <Link href={'/auth'}>
              <FaUserCircle className='text-2xl' />
            </Link>
          </li>
          <li className='ml-2'>
            <MdDarkMode className='cursor-pointer' />
          </li>
        </ul>
      </div>
      <ul className="flex items-center justify-between w-full md:w-1/3 mt-4">
        <li className="hover:-translate-y-2 duration-300 transition-all">
          <Link href={'/'}>Home</Link>
        </li>
        <li className="hover:-translate-y-2 duration-300 transition-all">
          <Link href={'/Rooms'}>Rooms</Link>
        </li>
        <li className="hover:-translate-y-2 duration-300 transition-all">
          <Link href={'/'}>Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
