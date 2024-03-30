import React, { useEffect, useState } from 'react'
import Wrapper from '../Components/Wrapper'
import RIderMenu from '../Components/RIderMenu'
import { RiDeleteBin6Line } from 'react-icons/ri'
import AppLayout from '../Layout/AppLayout'
import restaurantApi from '../Services/restaurantapi'
import Overlay from '../Components/Overlay'
import { createPortal } from 'react-dom'
import RiderForm from '../Components/RiderForm'
import toast from 'react-hot-toast'
import Spin from '../Components/Spin'
import { FormattedMessage } from 'react-intl'

const Rider = () => {
    const [riders, setRiders] = useState(null)
    const [showRiderForm, setShowRiderForm] = useState(false)
    const [overlay, setOverlay] = useState(false)
    const [loading, setLoading] = useState(false)
    const [fetching, setFetching] = useState(false)

    const toggleRiderForm = () => {
        setShowRiderForm(!showRiderForm)
        setOverlay(!overlay)
    }

    const toggleLoading = () => {
        setLoading(!loading)
    }

    useEffect(() => {
        const getRiders = async () => {
            try {
                setFetching(true)
                const response = await restaurantApi.get('/riders')
                setRiders(response.data.data)
                setFetching(false)
            } catch (error) {
                setFetching(false)
                toast.error(error.response.data.message)
            }
        }
        getRiders()
    }, [])

    const deleteRider = async (id) => {
        try {
            const response = await restaurantApi.delete(`/riders/${id}`)
            toast.success(response.data.message)
            setRiders((prevRiders) =>
                prevRiders.filter((rider) => rider.id !== id),
            )
        } catch (error) {
            toast.error(error.response.data.message)
            console.error(error)
        }
    }

    return (
        <>
            <Wrapper>
                <div className='flex flex-col'>
                    <RIderMenu
                        toggleRiderForm={toggleRiderForm}
                        heading={<FormattedMessage id='Riders Control Panel'/>}
                        para={<FormattedMessage id='Manage your riders with ease!'/>}
                        image={'/src/assets/rider.png'}
                        modalButtonText={<FormattedMessage id='+ Add Rider'/>}
                        cardsMainHeading={'All Riders'}
                    />
                    <div className='py-8 mx-5 lg:mx-0 lg:mr-5'>
                        <h3 className='text-2xl font-semibold text-gray-800'>
                           <FormattedMessage id='All Riders'/>
                        </h3>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
                            {fetching ? (
                                <Spin />
                            ) : (
                                riders?.map((rider) => (
                                    <div
                                        className='bg-white rounded-2xl shadow-md '
                                        key={rider.id}
                                    >
                                        <img
                                            src='/src/assets/rider1.png'
                                            alt='Rider'
                                            className='rounded-lg w-full'
                                            loading='lazy'
                                        />
                                        <div className='p-4'>
                                            <div className='flex justify-between mb-2'>
                                                <div>
                                                    <h6 className='text-gray-800 font-medium'>
                                                        Name:
                                                    </h6>
                                                    <h6 className='text-gray-800 font-medium'>
                                                        <FormattedMessage id='Contact No:'/>
                                                    </h6>
                                                    <h6 className='text-gray-800 font-medium'>
                                                        ID:
                                                    </h6>
                                                </div>
                                                <div>
                                                    <h6 className='text-gray-900'>
                                                        {rider.User.first_name +
                                                            ' ' +
                                                            rider.User
                                                                .last_name}
                                                    </h6>
                                                    <h6 className='text-gray-900'>
                                                        {rider.User.contact_no}
                                                    </h6>
                                                    <h6 className='text-gray-900'>
                                                        {rider.id}
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className='flex justify-center items-center'>
                                                <div>
                                                    <button
                                                        className='bg-red-500 text-white px-5 py-1 rounded-md flex items-center'
                                                        onClick={() =>
                                                            deleteRider(
                                                                rider.user_id,
                                                            )
                                                        }
                                                    >
                                                        <RiDeleteBin6Line className='mr-1' />
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                            {riders?.length === 0 && (
                                <div className='flex flex-col justify-center items-center'>
                                    <h1><FormattedMessage id='No Riders Found'/></h1>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Wrapper>
            {showRiderForm && (
                <>
                    {createPortal(
                        <RiderForm
                            toggleRiderForm={toggleRiderForm}
                            toggleLoading={toggleLoading}
                        />,
                        document.getElementById('modal'),
                    )}
                    <Overlay toggleOverlay={toggleRiderForm} />
                </>
            )}
        </>
    )
}

export default AppLayout()(Rider)
