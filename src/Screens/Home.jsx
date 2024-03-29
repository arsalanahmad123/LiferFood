import React from 'react'
import { FaRegCalendarCheck } from 'react-icons/fa6'
import { FaArrowUp } from 'react-icons/fa6'
import HeaderSection from '../Components/HeaderSection'
import Wrapper from '../Components/Wrapper'
import AppLayout from '../Layout/AppLayout'

const Home = () => {
    return (
        <>
            <Wrapper>
                <HeaderSection
                    heading={'Dashboard'}
                    para={'Your Financial Updates!'}
                />
                <div className='flex flex-col mt-5 gap-x-5 lg:flex-row px-5 lg:px-0 lg:pr-10 gap-y-5 md:flex-row md:flex-wrap'>
                    <div className='bg-white shadow-xl flex flex-row justify-center items-center p-6 rounded-xl gap-x-7'>
                        <div className='p-5 rounded-full bg-linkBg text-center'>
                            <FaRegCalendarCheck size={35} fill='#ffb100' />
                        </div>
                        <div className='flex flex-col text-primary gap-y-2'>
                            <h1 className='text-5xl font-extrabold'>75</h1>
                            <span>Sales Today</span>
                            <div className='flex flex-row gap-x-4 justify-center items-center'>
                                <div className='text-green-500 p-2 bg-green-100 rounded-full'>
                                    <FaArrowUp size={12} />
                                </div>
                                <span className='text-gray-600'>
                                    4% (Yesterday)
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white shadow-xl flex flex-row justify-center items-center p-6 rounded-xl gap-x-7'>
                        <div className='p-5 rounded-full bg-linkBg text-center'>
                            <FaRegCalendarCheck size={35} fill='#ffb100' />
                        </div>
                        <div className='flex flex-col text-primary gap-y-2'>
                            <h1 className='text-5xl font-extrabold'>75</h1>
                            <span>Sales Today</span>
                            <div className='flex flex-row gap-x-4 justify-center items-center'>
                                <div className='text-green-500 p-2 bg-green-100 rounded-full'>
                                    <FaArrowUp size={12} />
                                </div>
                                <span className='text-gray-600'>
                                    4% (Yesterday)
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white shadow-xl flex flex-row justify-center items-center p-6 rounded-xl gap-x-7'>
                        <div className='p-5 rounded-full bg-linkBg text-center'>
                            <FaRegCalendarCheck size={35} fill='#ffb100' />
                        </div>
                        <div className='flex flex-col text-primary gap-y-2'>
                            <h1 className='text-5xl font-extrabold'>75</h1>
                            <span>Sales Today</span>
                            <div className='flex flex-row gap-x-4 justify-center items-center'>
                                <div className='text-green-500 p-2 bg-green-100 rounded-full'>
                                    <FaArrowUp size={12} />
                                </div>
                                <span className='text-gray-600'>
                                    4% (Yesterday)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-start items-center mt-16 md:gap-x-7 gap-y-6 px-3 pb-2'>
                    <div className='bg-white shadow-xl p-6 rounded-xl md:w-[45%] w-full'>
                        <h1 className='text-2xl font-bold text-primary'>
                            Sales
                        </h1>
                    </div>
                    <div className='bg-white shadow-xl p-6 rounded-xl md:w-[45%] w-full'>
                        <h1 className='text-2xl font-bold text-primary'>
                            Orders
                        </h1>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default AppLayout()(Home)
