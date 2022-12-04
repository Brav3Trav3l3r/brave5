'use client'

import Image from 'next/image';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import parse from 'html-react-parser';
import { useState } from 'react';


import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Overview = ({ info }) => {

    const [showMe, setShowMe] = useState(false);
    function toggle() {
        setShowMe(!showMe);
    }

    return (
        <div className="overview  min-h-fit max-w-6xl md:mx-auto overflow-hidden p-4 space-y-12 ">
            {info.description ? <div className="description bg-neutral p-4 pb-0 rounded">
                <div className="para overflow-hidden  " style={{ height: showMe ? "max-content" : "150px" }} >
                    <h1 className='mb-4 p-2 border-b-2 border-primary'>Description</h1>
                    {parse(`<p className='opacity-80 text-sm tracking-wide mb-4 mx-auto leading-relaxed'>${info.description}</p>`)}
                </div>
                <button onClick={toggle} className='select-none outline-none mx-auto w-full pt-2 text-primary'>{showMe ? <IoIosArrowUp className=' w-full text-2xl' /> : <IoIosArrowDown className=' w-full text-2xl' />}</button>
            </div> : ""}

            <div className="relations ">
                <h1 className='mb-4 text-lg select-none font-semibold'>Relations</h1>
                <div className="cards flex overflow-x-scroll scrollbar-hide gap-4">
                    {info.relations.map(item => (
                        <Link href={`/info/${item.id}`} prefetch={false} key={item.id}><div className="card w-32">
                            <div className="image select-none relative w-32 h-48 rounded truncate ">
                                <Image src={item.image} fill={true} className='object-cover' alt={item.title.userPreferred ? item.title.userPreferred : item.title.romaji} />
                            </div>
                            <h1 className='title-third line-clamp-2'>{item.title.userPreferred ? item.title.userPreferred : item.title.romaji}</h1>
                        </div></Link>
                    ))}
                </div>
            </div>

            <div className="characters relative">
                <h1 className='mb-4 text-lg select-none font-semibold'>Characters</h1>
                <div className="cards flex overflow-x-scroll gap-4 scrollbar-hide relative">
                    {info.characters.map((item => (
                        <div className="card text-center" key={uuidv4()}>
                            <div className="image select-none w-28 h-28 relative rounded-full hover:border-2 border-primary truncate mb-2 ">
                                <Image src={item.image} fill={true} className='object-cover' alt={item.name.full} />
                            </div>
                            <h1 className='title-third line-clamp-2'>{item.name.full ? item.name.full : item.name.userPreferred}</h1>
                        </div>
                    )))}

                </div>
                <div className="gradient absolute right-0 top-4 bg-gradient-to-l from-base-100 w-20 h-full "></div>

            </div>

            <div className="recomendations relative">
                <h1 className='mb-4 text-lg select-none font-semibold'>Recommendations</h1>
                <div className="cards overflow-x-scroll scrollbar-hide relative flex ">
                    {info.recommendations.map(item => (
                        <Link href={`/info/${item.id}`} prefetch={false} key={item.id}>{item.id ? <div className="card mr-4 w-32" >
                            <div className="image select-none relative w-32 h-48 rounded truncate">
                                <Image src={item.image} fill={true} alt={item.title.userPreferred ? item.title.userPreferred : item.title.romaji} className='object-cover select-none' />
                            </div>
                            <h1 className='title-third line-clamp-2'>{item.title.userPreferred ? item.title.userPreferred : item.title.romaji}</h1>
                        </div> : <div className='hidden'></div>}</Link>
                    ))}
                </div>
                <div className="gradient absolute right-0 top-4 bg-gradient-to-l from-base-100 w-24 h-full "></div>
            </div>
        </div>
    );
}

export default Overview;