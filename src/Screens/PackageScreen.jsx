import React, { Fragment } from 'react'
import logo from '../assets/logo.png'
import Package from './Package'

const PackageScreen = () => {
    return (
        <Fragment>
            <div className='lg:grid lg:grid-cols-12 '>
                <div className='lg:col-span-5  flex justify-center'>
                    <div className=''>
                        <Package />
                    </div>
                </div>
                <div className='lg:col-span-7 relative hidden lg:block'>
                    <div className="bg-[url('/src/assets/bg.jpeg')] bg-cover h-[100vh] ">
                        <div className='absolute inset-0 bg-black opacity-60'></div>
                        <div className='flex justify-center items-center h-[100vh] text-white'>
                            <div className='relative'>
                                <img src={logo} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default PackageScreen
