import React, { Fragment, useEffect,  } from 'react'
import logo from '../assets/logo.png'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { login } from '../Services/Authentication'
import toast from 'react-hot-toast'
import { useAuth } from '../Context/AuthContext'
import { setRestaurant } from '../redux/RestaurantSlice'

const Login = () => {
    const navigate = useNavigate()
    const { loginUser, setIsLoading, loggedIn } = useAuth()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const formSubmit = async (data) => {
        setIsLoading(true)
        try {
            const response = await login(data)
            if (response) {
                const user = response.data
                loginUser(user, response.data.token)
                setRestaurant(user?.role_data)
                setIsLoading(false)
                toast.success(response.message, { duration: 5000 })
                navigate('/')
            }
        } catch (error) {
            setIsLoading(false)
            toast.error(error.message || 'An error occured during Login', {
                duration: 5000,
            })
        }
    }

    const navigator = () => {
        navigate('/account/signup')
    }

    useEffect(() => {
        if (loggedIn) {
            navigate('/')
        }
    })

    return (
        <Fragment>
            <div className='lg:grid lg:grid-cols-12 '>
                <div className='lg:col-span-5  flex justify-center'>
                    <div className='md:w-[400px]  w-[300px] '>
                        <form onSubmit={handleSubmit(formSubmit)}>
                            <div className='flex justify-center py-8'>
                                <img
                                    className='object-contain w-50'
                                    src={logo}
                                />
                            </div>
                            <div>
                                <h3 className='text-[#464255] text-3xl md:text-4xl font-bold py-2 '>
                                    Login
                                </h3>
                                <p className='text-[#464255] text-sm pb-8'>
                                    Please fill your information below
                                </p>
                            </div>
                            <div>
                                <div className='flex justify-start flex-col'>
                                    <div className='relative'>
                                        <input
                                            type='email'
                                            placeholder='E-mail'
                                            className='pl-10 pr-4 py-3 rounded-lg bg-[#F5F5F7] focus:outline-none md:w-[400px]  w-[300px] focus:ring-0 focus:border-textActive'
                                            {...register('email', {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message:
                                                        'Invalid email address',
                                                },
                                            })}
                                        />
                                        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none '>
                                            <MdEmail className='text-gray-500' />
                                        </div>
                                    </div>
                                    {errors.email && (
                                        <span className='text-red-500 text-sm ml-3'>
                                            {errors.email.message}
                                        </span>
                                    )}
                                </div>
                                <div className='mt-5 mb-8 flex justify-start flex-col'>
                                    <div className='relative'>
                                        <input
                                            type='password'
                                            placeholder='Password'
                                            className='pl-10 pr-4 py-3 rounded-lg bg-[#F5F5F7] focus:outline-none md:w-[400px]  w-[300px] focus:ring-0 focus:border-textActive'
                                            {...register('password', {
                                                required:
                                                    'Password is required',
                                            })}
                                        />
                                        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                            <RiLockPasswordFill className='text-gray-500' />
                                        </div>
                                    </div>
                                    {errors.password && (
                                        <span className='text-red-500 text-sm ml-3'>
                                            {errors.password.message}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className=' flex justify-center  mb-8  cursor-pointer'>
                                <button
                                    type='submit'
                                    className='bg-[#FBC252] py-3 w-[200px] lg:w-[400px] text-white rounded-md'
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                        <div className='mb-10'>
                            <span className='text-center text-sm text-[#464255] cursor-pointer'>
                                Forgot Your Password?
                            </span>
                        </div>
                        <div
                            className='flex justify-center mb-8  cursor-pointer lg:hidden'
                            onClick={navigator}
                        >
                            <button className='bg-[#FBC252] py-3 w-[400px] text-white rounded-md'>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
                <div className='lg:col-span-7 relative hidden lg:block'>
                    <div className="bg-[url('/src/assets/bg.jpeg')] bg-cover h-[100vh] ">
                        <div className='absolute inset-0 bg-black opacity-60'></div>
                        <div className='flex justify-center items-center h-[100vh] text-white'>
                            <div className='relative'>
                                <h3 className='text-center pb-2 font-bold text-3xl text-white'>
                                    New Here?
                                </h3>
                                <span className='text-center font-semibold text-base text-white'>
                                    Figma ipsum component variant main layer.
                                </span>
                                <div
                                    className='flex justify-center pt-10'
                                    onClick={navigator}
                                >
                                    <button className='bg-[#FFB100] px-14 py-3 rounded-xl text-white font-semibold cursor-pointer'>
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default (Login)
