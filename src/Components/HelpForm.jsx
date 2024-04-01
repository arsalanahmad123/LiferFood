import React, { Fragment } from 'react'
import Wrapper from '../Components/Wrapper'
import HeaderSection from '../Components/HeaderSection'
import { IoMdReturnLeft } from 'react-icons/io'
import EditorComponent from '../Screens/EditorComponent'
import AppLayout from '../Layout/AppLayout'
import { FormattedMessage } from 'react-intl'

const HelpForm = () => {
    return (
        <Wrapper>
            <HeaderSection heading={<FormattedMessage id='Help'/>} para={<FormattedMessage id='How can we help you?'/>} />
            <div className='mt-10 ml-5  w-[50px] h-[50px]'>
                <IoMdReturnLeft
                    size={30}
                    className='text-helpForm cursor-pointer'
                    onClick={() => window.history.back()}
                />
            </div>
            <div className='flex justify-center items-center md:mt-[-20px] mt-10 mx-5'>
                <div className='bg-white rounded-lg p-8 max-w-md w-full'>
                    <div className='md:text-center'>
                        <h3 className='text-helpForm text-2xl font-semibold mb-10'>
                            <FormattedMessage id='Ticket Request Form'/>
                        </h3>
                    </div>
                    <div className=''>
                        <div className='mb-4'>
                            <div className='flex flex-col md:flex-row justify-between md:items-center'>
                                <div>
                                    <h6 className='text-[#000000] text-sm font-bold'>
                                        Email
                                    </h6>
                                </div>
                                <div>
                                    <div>
                                        <h6 className='text-[#000000] text-sm pr-16'>
                                            Restaurant@gmail.com
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mb-4'>
                            <div className='flex justify-between md:items-center flex-col md:flex-row'>
                                <div>
                                    <h6 className='text-[#000000] text-sm font-bold'>
                                        Restaurant Name{' '}
                                    </h6>
                                </div>
                                <div>
                                    <div>
                                        <h6 className='text-[#000000] text-sm pr-36'>
                                            Mcdonald’s
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='border-t bg-yellow-500' />
                        <div className='mb-4 mt-5'>
                            <div className='md:items-center flex-col md:flex-row'>
                                <div className='pb-5'>
                                    <h6 className='text-[#000] text-sm font-bold'>
                                        <FormattedMessage id='Subject'/>
                                    </h6>
                                </div>
                                <div>
                                    <input
                                        className='rounded px-3 py-2 w-[220px] md:w-[380px] text-sm border border-black focus:border-black focus:outline-none focus:ring-0'
                                        type='text'
                                        placeholder='Enter the subject of the ticket'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='mb-4 py-3'>
                            <div className='flex md:items-center flex-col md:flex-row'>
                                <div>
                                    <h6 className='text-[#000] text-sm text-left font-bold'>
                                        <FormattedMessage id='Priority'/>
                                    </h6>
                                </div>
                                <div className=' flex pl-20'>
                                    <div>
                                        <input
                                            type='radio'
                                            className='form-radio text-yellow-500 focus:ring-yellow-500'
                                            id='option1'
                                            name='radioGroup'
                                            value='option1'
                                            checked
                                        />
                                        <label
                                            htmlFor='option1'
                                            className='ml-2 text-gray-700 pr-5'
                                        >
                                            Normal
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            type='radio'
                                            className='form-radio text-yellow-500 focus:ring-yellow-500'
                                            id='option2'
                                            name='radioGroup'
                                            value='option2'
                                        />
                                        <label
                                            htmlFor='option2'
                                            className='ml-2 text-gray-700'
                                        >
                                            <FormattedMessage id='Urgent'/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mb-4'>
                            <div className=' md:items-center flex-col md:flex-row'>
                                <div>
                                    <h6 className='text-[#000] font-bold text-sm'>
                                        <FormattedMessage id="Description"/>
                                    </h6>
                                </div>
                                <div>
                                    <EditorComponent />
                                </div>
                            </div>
                        </div>
                        <div className='md:text-right flex justify-center'>
                            <button className='bg-[#FFB100] text-white w-44 px-4 py-3 rounded-lg font-semibold text-sm'>
                                <FormattedMessage id="Create"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default AppLayout()(HelpForm)
