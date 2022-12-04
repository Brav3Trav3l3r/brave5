'use client'

import Image from 'next/image';
import Link from 'next/link';

import { HiOutlineMagnifyingGlass } from 'react-icons/hi';
import { RxHamburgerMenu } from 'react-icons/rx';


const Navbar = () => {
    return (
        <nav className="bg-base-300 h-16 w-full p-2 fixed top-0 flex items-center sm:px-4 space-x-4 drop-shadow-lg">

            <div className="main flex flex-1 items-center space-x-4 ">
                <RxHamburgerMenu className='lg:hidden'/>
                <Link href="/"><h1 className='text-2xl lg:text-3xl font-bold text-primary'>Ple<span className='text-base-content'>x</span></h1></Link>
                <input type="text" placeholder="Search" className="input bg-neutral h-10 flex-1 rounded-full px-2 max-w-[480px] " />
            </div>

            <div className="avatar dropdown dropdown-end">
                <label tabIndex={0} className="btn bg-transparent hover:bg-transparent border-none" >
                    <div className="rounded-full h-10 ring ring-primary ring-offset-base-100 ring-offset-2 truncate">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52">
                    <li><a>Profile</a></li>
                    <li><a>Saved</a></li>
                    <li><a>Setting</a></li>
                    <li><a className='text-error'>Log Out</a></li>
                </ul>
            </div>

        </nav>
    );
}

export default Navbar;