import React, { useState } from 'react'
import vector from '../assets/Vector.png'
import { IoCheckmarkOutline } from 'react-icons/io5'

const Package = () => {
    const [selectedOption, setSelectedOption] = useState(null)

    const handleOptionClick = (option) => {
        setSelectedOption(option)
    }
    return (
        <>
            <div className=' bg-white min-h-screen'>
                <div className='flex flex-col py-24 px-14 gap-y-10'>
                    <h3 className='text-4xl text-gray-800'>SELECT PACKAGE</h3>
                    <div className='flex flex-row gap-x-3'>
                        <div
                            className={`w-56 h-64 relative border rounded-lg cursor-pointer 
                    ${selectedOption === 1 && 'shadow-lg shadow-textActive'}`}
                            onClick={() => handleOptionClick(1)}
                            tabIndex={0}
                            role='button'
                        >
                            <div className='flex justify-start items-center p-3 gap-x-5'>
                                <input
                                    type='radio'
                                    checked={selectedOption === 1}
                                    className='checked:bg-textActive'
                                />
                                <span className='font-semibold text-[#A3BB98]'>
                                    Manual
                                </span>
                            </div>
                            <h4 className='text-center text-[#464255] pt-5'>
                                B089RY36
                            </h4>
                            <div className='flex justify-center pt-1'>
                                <hr class='border-t-2 border-[#B5B5B5] w-[150px]' />
                            </div>
                            <h4 className='text-center text-[#464255] pt-10'>
                                $350
                            </h4>
                            <div className='flex justify-center pt-1'>
                                <hr class='border-t-2 border-[#B5B5B5] w-[150px]' />
                            </div>
                            <div className='flex justify-center pt-8'>
                                <img src={vector} />
                            </div>
                        </div>
                        <div
                            className={`w-56 h-64 relative border border-gray-300 rounded-lg cursor-pointer 
                    ${selectedOption === 2 && 'shadow-lg shadow-textActive'}`}
                            onClick={() => handleOptionClick(2)}
                            tabIndex={0}
                            role='button'
                        >
                            <div className='flex justify-between items-center p-3 gap-x-5'>
                                <input
                                    type='radio'
                                    checked={selectedOption === 2}
                                    className='checked:bg-textActive'
                                />
                                <span className='font-semibold text-gray-600'>
                                    Premium
                                </span>
                                <span className='font-bold text-2xl text-gray-600'>
                                    $450
                                </span>
                            </div>
                            <div className='flex justify-center pl-3'>
                                <div className='pr-1'>
                                    <IoCheckmarkOutline />
                                </div>
                                <div>
                                    <p className='text-sm'>
                                        Figma ipsum component variant main
                                        layer.
                                    </p>
                                </div>
                            </div>
                            <div className='flex justify-center pl-3 pt-1'>
                                <div className='pr-1'>
                                    <IoCheckmarkOutline />
                                </div>
                                <div>
                                    <p className='text-sm'>
                                        Layer align group auto flows undo.
                                    </p>
                                </div>
                            </div>
                            <div className='flex justify-center pl-3 pt-1'>
                                <div className='pr-1'>
                                    <IoCheckmarkOutline />
                                </div>
                                <div>
                                    <p className='text-sm'>
                                        Object comment clip figma group vector.
                                    </p>
                                </div>
                            </div>
                            <div className='flex justify-center pl-3 pt-1'>
                                <div className='pr-1'>
                                    <IoCheckmarkOutline />
                                </div>
                                <div>
                                    <p className='text-sm'>
                                        Overflow fill editor export inspect
                                        select.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className='bg-textActive text-white font-medium rounded-lg w-3/4 mx-auto py-2 disabled:bg-orange-200 disabled:cursor-not-allowed'
                        disabled={!selectedOption}
                    >
                        Continue to Payment
                    </button>
                </div>
            </div>
        </>
    )
}

export default Package
