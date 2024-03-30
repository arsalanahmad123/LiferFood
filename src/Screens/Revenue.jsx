import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'

import Wrapper from '../Components/Wrapper'
import HeaderSection from '../Components/HeaderSection'
import AppLayout from '../Layout/AppLayout'
import { FormattedMessage } from 'react-intl'

const Revenue = ({ toggleRevenueForm }) => {
    return (
        <Wrapper>
            <HeaderSection heading={<FormattedMessage id='Revenue'/>} para={<FormattedMessage id='Track your Earnings'/>} />
            <div className=' bg-gray-100 flex flex-col gap-y-5'>
                <div className='flex flex-col gap-y-4 md:flex-row md:flex-wrap lg:flex-nowrap  mt-3 gap-x-3 lg:mr-5 mx-3 lg:mx-0'>
                    <div className='lg:w-3/5 md:w-1/2'>
                        <div className='rounded-xl bg-white p-6 flex flex-col gap-y-5 md:min-h-[200px]'>
                            <div>
                                <h5 className='text-2xl font-semibold text-gray-900'>
                                    <FormattedMessage id='Sales & Costs Today'/>
                                </h5>
                                <p className='text-lg text-gray-600'>
                                    Month, Jan 28th
                                </p>
                            </div>
                            <div className='flex flex-col'>
                                <div>
                                    <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                                        $3k
                                    </h2>
                                </div>
                                <div className='flex items-center flex-row gap-x-2'>
                                    <span className='text-green-500 flex flex-row justify-center items-center'>
                                        <FaArrowUpLong size={12} />
                                        <span className='text-lg'>8.67K</span>
                                    </span>
                                    <p className='text-lg text-gray-600'>
                                        <FormattedMessage id='vs last 7 days'/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-2/5 md:w-2/5'>
                        <div className='rounded-xl bg-white flex flex-row items-center justify-around p-6 md:min-h-[208px]'>
                            <div>
                                <FaArrowUpLong className='text-3xl text-green-500' />
                            </div>
                            <div className='flex flex-col gap-y-5'>
                                <h2 className='text-4xl font-bold text-gray-900'>
                                    $458k
                                </h2>
                                <div className='flex flex-col gap-y-2'>
                                    <h6 className='text-xl text-gray-900'>
                                        <FormattedMessage id='Monthly Revenue'/>
                                    </h6>
                                    <span className='flex flex-row justify-center items-center gap-x-2'>
                                        <div className='bg-green-100 p-2 rounded-full'>
                                            <FaArrowUpLong className='text-green-500 text-[13px]' />
                                        </div>
                                        <span className='text-gray-500 text-lg'>
                                            25%(30 days)
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-8 sm:w-full mx-3 lg:mt-0 lg:w-2/6 md:w-2/5 lg:mx-0'>
                    <div className='bg-green-500 rounded-xl p-6'>
                        <div className='flex justify-between items-center flex-row'>
                            <div>
                                <h6 className='text-xl font-medium text-gray-100 mb-5'>
                                    <FormattedMessage id="Add to Today's Revenue through this button"/>
                                </h6>
                                <button
                                    className='px-6 py-2 bg-white text-gray-600 rounded-lg font-semibold text-lg'
                                    onClick={toggleRevenueForm}
                                >
                                    <FormattedMessage id='+Add Revenue'/>
                                </button>
                            </div>
                            <div>
                                <FaArrowUpLong className='text-6xl text-white' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default AppLayout()(Revenue)
