import React from 'react'
import { NavLink } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci'
import { useMediaQuery } from 'react-responsive'

const ChatSideBar = ({ openSideBar }) => {
    const isSmallScreen = useMediaQuery({
        query: '(max-width: 1200px)',
    })

    return (
        <div
            className={`bg-white lg:border-r border-gray-300  transition-transform duration-500 ease-in-out lg:translate-x-0  ${
                openSideBar &&
                'fixed top-0 left-0 z-50 w-[250px] md:w-[300px] shadow-2xl min-h-full transform translate-x-0 '
            }
      ${isSmallScreen && !openSideBar && 'translate-x-[-100%] absolute '}"

       }
       
      
      }`}
            id='chatSidebar'
        >
            <div className='flex flex-col justify-center items-center gap-y-5 '>
                <input
                    type='text'
                    name='searchMessage'
                    id='searchMessage'
                    className='w-full bg-gray-200 p-3 outline-none relative border-none'
                    placeholder='Search for Messages'
                />
                <CiSearch className='lg:absolute lg:block lg:text-lg top-4 right-3 text-gray-500 hidden' />
                <ul className='flex flex-col gap-y-5 w-full'>
                    <li className=' text-[14px] w-full'>
                        <div className=' w-[95%] mx-auto flex flex-row justify-center items-start  p-1  cursor-pointer transition-all duration-300 hover:bg-linkBg gap-x-6 border-b lg:border-none'>
                            <div className='w-10 rounded-full'>
                                <img
                                    src='https://i.pravatar.cc/50'
                                    alt=''
                                    className='rounded-full'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <span className='font-semibold'>Username</span>
                                <span className='text-sm text-gray-600'>
                                    Lorem ipsum dolor sit amet.
                                </span>
                            </div>
                            <div className='text-xs'>
                                <span>10/19</span>
                            </div>
                        </div>
                    </li>
                    <li className=' text-[14px] w-full'>
                        <div className=' w-[95%] mx-auto flex flex-row justify-center items-start  p-1 cursor-pointer transition-all duration-300 hover:bg-linkBg gap-x-6 border-b lg:border-none'>
                            <div className='w-10 rounded-full'>
                                <img
                                    src='https://i.pravatar.cc/50'
                                    alt=''
                                    className='rounded-full'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <span className='font-semibold'>Username</span>
                                <span className='text-sm text-gray-600'>
                                    Lorem ipsum dolor sit amet.
                                </span>
                            </div>
                            <div className='text-xs'>
                                <span>10/19</span>
                            </div>
                        </div>
                    </li>
                    <li className=' text-[14px] w-full'>
                        <div className=' w-[95%] mx-auto flex flex-row justify-center items-start  p-1 border-b lg:border-none cursor-pointer transition-all duration-300 hover:bg-linkBg gap-x-6'>
                            <div className='w-10 rounded-full'>
                                <img
                                    src='https://i.pravatar.cc/50'
                                    alt=''
                                    className='rounded-full'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <span className='font-semibold'>Username</span>
                                <span className='text-sm text-gray-600'>
                                    Lorem ipsum dolor sit amet.
                                </span>
                            </div>
                            <div className='text-xs'>
                                <span>10/19</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ChatSideBar
