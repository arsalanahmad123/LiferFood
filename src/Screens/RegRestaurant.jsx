import React, { Fragment, useState, memo } from 'react'
import logo from '../assets/logo.png'
import { IoLocationSharp } from 'react-icons/io5'

import { useForm } from 'react-hook-form'
import axios from 'axios'

const RegRestaurant = () => {
    const [location, setLocation] = useState({
        country: '',
        city: '',
        latitude: '',
        longitude: '',
    })
    const [file, setFile] = useState('')
    const [fetching, setFetcing] = useState(false)
    const [imageUploadProgress, setImageUploadProgree] = useState(false)

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm()

    const createRestaurant = async (data) => {}

    const getCurrentLocation = async () => {
        try {
            setFetcing(true)
            const response = await axios.get(
                `https://api.ipdata.co?api-key=1f13f1dd1e6f98aec0499f542f217935a655e2e43ea4d07b4430c180`,
            )
            setLocation({
                country: response.data.country_name,
                city: response.data.city,
                latitude: response.data.latitude,
                longitude: response.data.longitude,
            })
            setFetcing(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Fragment>
            <div className='lg:grid lg:grid-cols-12 '>
                <div className='lg:col-span-5  flex justify-center'>
                    <form
                        onSubmit={handleSubmit(createRestaurant)}
                        className='md:w-[400px]  w-[300px] '
                    >
                        <div className='flex justify-center py-8'>
                            <img className='object-contain w-50' src={logo} />
                        </div>
                        <div>
                            <h3 className='text-[#464255] text-3xl md:text-4xl font-bold py-2 '>
                                Register Your Restaurant Here...
                            </h3>
                            <p className='text-[#464255] text-sm pb-8'>
                                Please fill your information below
                            </p>
                        </div>
                        <div>
                            <div className='flex justify-center'>
                                <input
                                    type='text'
                                    name='restaurantName'
                                    placeholder='Restaurant Name'
                                    className='pl-5 pr-4 py-3 rounded-lg bg-[#F5F5F7] focus:outline-none md:w-[400px]  w-[300px] focus:ring-0 focus:border-textActive'
                                />
                            </div>
                            <div className='mt-5 mb-5 flex justify-center'>
                                <div className='grid grid-cols-2 gap-4'>
                                    <input
                                        type='text'
                                        placeholder='Country'
                                        name='country'
                                        onChange={(e) =>
                                            setLocation({
                                                ...location,
                                                country: e.target.value,
                                            })
                                        }
                                        value={location.country}
                                        className='pl-5 pr-4 py-3 rounded-lg bg-[#F5F5F7] focus:outline-none  focus:ring-0 focus:border-textActive'
                                    />
                                    <input
                                        type='text'
                                        name='city'
                                        value={location.city}
                                        onChange={(e) =>
                                            setLocation({
                                                ...location,
                                                city: e.target.value,
                                            })
                                        }
                                        placeholder='City'
                                        className='pl-5 pr-4 py-3 rounded-lg bg-[#F5F5F7] focus:outline-none  focus:ring-0 focus:border-textActive'
                                    />
                                </div>
                            </div>
                            <div className='mt-5 mb-5 flex justify-center'>
                                <div className='grid grid-cols-2 gap-4'>
                                    <input
                                        type='text'
                                        placeholder='Latitude'
                                        name='latitude'
                                        value={location.latitude}
                                        onChange={(e) =>
                                            setLocation({
                                                ...location,
                                                latitude: e.target.value,
                                            })
                                        }
                                        className='pl-5 pr-4 py-3 rounded-lg bg-[#F5F5F7] focus:outline-none  focus:ring-0 focus:border-textActive'
                                    />
                                    <input
                                        type='text'
                                        name='longitude'
                                        value={location.longitude}
                                        placeholder='Longitude'
                                        onChange={(e) =>
                                            setLocation({
                                                ...location,
                                                longitude: e.target.value,
                                            })
                                        }
                                        className='pl-5 pr-4 py-3 rounded-lg bg-[#F5F5F7] focus:outline-none  focus:ring-0 focus:border-textActive'
                                    />
                                </div>
                            </div>
                            <div className='flex justify-center items-center mb-3'>
                                <button
                                    className='relative bg-textActive text-white px-3 py-2 font-medium pr-10 rounded-md'
                                    onClick={getCurrentLocation}
                                >
                                    {fetching ? 'fetching...' : 'Get Location'}
                                    <IoLocationSharp className=' absolute top-2 right-1.5 text-lg text-white' />
                                </button>
                            </div>

                            <div className='flex justify-between items-center border-4 mb-12 border-teal-500 border-dotted p-3'>
                                <input
                                    type='file'
                                    accept='image/*'
                                    onChange={(e) => setFile(e.target.files[0])}
                                    className='focus:outline-none focus:ring-0'
                                />
                            </div>
                        </div>
                        <div className=' flex justify-center  mb-8  cursor-pointer'>
                            <button className='bg-[#FBC252] py-3 w-[200px] lg:w-[400px] text-white rounded-md'>
                                Register
                            </button>
                        </div>
                    </form>
                </div>
                <div className='lg:col-span-7 w-[59%] hidden lg:block fixed top-0 right-0'>
                    <div className="bg-[url('/src/assets/bg.jpeg')] bg-cover h-[700px] ">
                        <div className='absolute inset-0 bg-black opacity-60'></div>
                        <div className='flex justify-center items-center h-[100vh] text-white'>
                            <div className='relative'>
                                <img
                                    className='object-contain w-50'
                                    src={logo}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default memo(RegRestaurant)
