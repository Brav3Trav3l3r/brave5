'use client'

import Image from 'next/image';
import Link from 'next/link';

import { RxHamburgerMenu } from 'react-icons/rx';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi';

const Navbar = () => {
    return (
        <nav className="bg-zinc-900 h-16 w-full p-2 fixed top-0 flex items-center sm:px-4 space-x-4">

            <div className="main flex flex-1 items-center space-x-4 ">
                <RxHamburgerMenu className='text-xl' />
                <Link href="/"><h1 className='text-2xl font-bold '>Plex</h1></Link>
                <input className='bg-zinc-700 h-10 flex-1 rounded-full px-2 max-w-[480px] ' placeholder='Search' />
            </div>

            <div className="avatar dropdown dropdown-end">
                <label tabIndex={0} className="btn">
                    <div className="rounded-full h-10 ring ring-primary ring-offset-base-100 ring-offset-2 truncate">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>

        </nav>
    );
}

export default Navbar;