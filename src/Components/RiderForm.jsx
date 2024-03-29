import { useState } from 'react'
import { useForm } from 'react-hook-form'
import restaurantApi from '../Services/restaurantapi'
import toast from 'react-hot-toast'

const RiderForm = ({ toggleRiderForm, toggleLoading }) => {
    const [imagePreview, setImagePreview] = useState(null)

    const handleImageChange = (e) => {
        const file = e.target.files[0]

        if (file) {
            const reader = new FileReader()

            reader.onloadend = () => {
                setImagePreview(reader.result)
            }

            reader.readAsDataURL(file)
        }
    }
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm()

    const createRider = async (data) => {
        const formData = new FormData()

        formData.append('first_name', data.firstname)
        formData.append('last_name', data.lastname)
        formData.append('contact_no', data.phone)
        formData.append('email', data.email)
        formData.append('password', data.password)

        try {
            const response = await restaurantApi.post('/riders', formData)

            if (response.data.success === true) {
                toast.success(response.data.message)
                navigate('/riders')
                toggleRiderForm()
                toggleLoading()
            }
        } catch (error) {
            toggleRiderForm()
            toggleLoading()
            toast.error(error.response.data.message)
        }
    }

    return (
        <>
            <div
                className='bg-white absolute top-40 left-1 right-1 md:left-44 md:right-44 lg:top-20 lg:right-96 lg:left-96 p-7 rounded-lg overflow-auto'
                style={{ zIndex: 1100 }}
            >
                <form
                    onSubmit={handleSubmit(createRider)}
                    className='flex flex-col'
                >
                    <h1
                        className='font-semibold text-xl md:text-2xl text-center mb-2 text-textActive
          '
                    >
                        Add Rider
                    </h1>
                    <div className='mb-3 grid grid-cols-12 gap-x-3 '>
                        <div className='flex flex-col col-span-6 gap-y-1'>
                            <label
                                htmlFor='firstname'
                                className='text-sm font-bold'
                            >
                                First Name
                            </label>
                            <input
                                type='text'
                                name='firstname'
                                id='firstname'
                                className='rounded-lg focus:outline-none focus:ring-0 focus:border focus:border-textActive'
                                {...register('firstname', {
                                    required: 'First Name is required',
                                    minLength: {
                                        value: 3,
                                        message:
                                            'First Name must be at least 3 characters',
                                    },
                                    maxLength: {
                                        value: 50,
                                        message:
                                            'First Name must be less than 20 characters',
                                    },
                                })}
                            />
                            {errors.firstname && (
                                <p className='text-red-500 text-xs'>
                                    {errors.firstname.message}
                                </p>
                            )}
                        </div>
                        <div className='flex flex-col col-span-6 gap-y-1'>
                            <label
                                htmlFor='lastname'
                                className='text-sm font-bold'
                            >
                                Last Name
                            </label>
                            <input
                                type='text'
                                name='lastname'
                                id='lastname'
                                className='rounded-lg focus:outline-none focus:ring-0 focus:border focus:border-textActive'
                                {...register('lastname', {
                                    required: 'Last Name is required',
                                    minLength: {
                                        value: 3,
                                        message:
                                            'Last Name must be at least 3 characters',
                                    },
                                    maxLength: {
                                        value: 50,
                                        message:
                                            'Last Name must be less than 20 characters',
                                    },
                                })}
                            />
                        </div>
                    </div>
                    <div className='mb-3 grid grid-cols-12 gap-x-3'>
                        <div className='flex flex-col gap-y-1 col-span-6'>
                            <label
                                htmlFor='email'
                                className='text-sm font-bold'
                            >
                                Email
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                className='rounded-lg focus:outline-none focus:ring-0 focus:border focus:border-textActive'
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address',
                                    },
                                    minLength: {
                                        value: 5,
                                        message:
                                            'Email must be at least 3 characters',
                                    },
                                    maxLength: {
                                        value: 50,
                                        message:
                                            'Email must be less than 20 characters',
                                    },
                                })}
                            />
                        </div>
                        <div className='flex flex-col gap-y-1 col-span-6'>
                            <label
                                htmlFor='password'
                                className='text-sm font-bold'
                            >
                                Password
                            </label>
                            <input
                                type='password'
                                name='password'
                                id='password'
                                className='rounded-lg focus:outline-none focus:ring-0 focus:border focus:border-textActive'
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 9,
                                        message:
                                            'Password must be at least 9 characters',
                                    },
                                    maxLength: {
                                        value: 50,
                                        message:
                                            'Password must be less than 50 characters',
                                    },
                                })}
                            />
                            {errors.password && (
                                <p className='text-red-500 text-xs'>
                                    {errors.password.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className='mb-3 grid grid-cols-12 gap-x-3'>
                        <div className='flex flex-col gap-y-1 col-span-6'>
                            <label
                                htmlFor='phone'
                                className='text-sm font-bold'
                            >
                                Contact
                            </label>
                            <input
                                type='text'
                                name='phone'
                                id='phone'
                                className='rounded-lg focus:outline-none focus:ring-0 focus:border focus:border-textActive'
                                {...register('phone', {
                                    required: 'Contact is required',
                                    minLength: {
                                        value: 10,
                                        message:
                                            'Contact must be at least 10 characters',
                                    },
                                    maxLength: {
                                        value: 50,
                                        message:
                                            'Contact must be less than 50 characters',
                                    },
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: 'Invalid contact number',
                                    },
                                })}
                            />
                            {errors.phone && (
                                <p className='text-red-500 text-xs'>
                                    {errors.phone.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <button
                        type='submit'
                        className='bg-textActive text-white py-1 font-semibold rounded-lg'
                    >
                        Add
                    </button>
                </form>
            </div>
        </>
    )
}

export default RiderForm
