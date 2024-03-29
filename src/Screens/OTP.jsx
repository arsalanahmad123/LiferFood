import React, { useRef, useEffect, useState, useCallback,  } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const base_url = import.meta.env.VITE_BASE_URL
import { signup } from '../Services/Authentication'
import toast from 'react-hot-toast'

const OTP = () => {
    const [otp, setOTP] = useState(['', '', '', '', '', ''])
    const navigate = useNavigate()
    const inputsRef = useRef([])
    const [resend, setResend] = useState(false)
    const [counter, setCounter] = useState(30)
    const buttonRef = useRef()

    const user = localStorage.getItem('user')
    const signupUser = JSON.parse(user)

    useEffect(() => {
        inputsRef.current[0].focus()
    }, [])

    const handleInputChange = useCallback(
        (index, value) => {
            if (isNaN(value) || value.length > 1) return
            const newOTP = [...otp]
            newOTP[index] = value
            setOTP(newOTP)

            if (index < 5 && value !== '') {
                inputsRef.current[index + 1].focus()
            }
        },
        [otp],
    )

    const handleBackspace = useCallback(
        (index, event) => {
            if (event.keyCode === 8 && index > 0 && otp[index] === '') {
                inputsRef.current[index - 1].focus()
            }
        },
        [otp],
    )

    const isOTPComplete = otp.every((digit) => digit !== '')

    const handleResendOTP = async () => {
        setResend(true)
        setCounter(30)

        try {
            const response = await signup(signupUser)
            if (response.success === true) {
                setOTP(['', '', '', '', '', ''])
                inputsRef.current[0].focus()
                toast.success('OTP Sent Successfully')
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const checkOTP = async () => {
        const OTP = Number(otp.join(''))
        try {
            const response = await axios.post(`${base_url}/verify-email`, {
                email: signupUser.email,
                otp: OTP,
            })
            if (response.success === true) {
                toast.success(response.data.message)
                setOTP(['', '', '', '', '', ''])
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    useEffect(() => {
        let timer

        if (resend && counter > 0) {
            timer = setInterval(() => {
                setCounter((prevCounter) => prevCounter - 1)
            }, 1000)
        } else if (counter === 0) {
            clearInterval(timer)
            setResend(false)
            setCounter(30)
        }

        return () => clearInterval(timer)
    }, [resend, counter])

    return (
        <>
            <div className='bg-white min-h-screen lg:grid lg:grid-cols-12 '>
                <div className='lg:col-span-5  flex flex-col justify-start items-start gap-y-3 px-5 overflow-hidden p-10'>
                    <h1 className='text-3xl font-bold'>Enter 4 digit code</h1>
                    <div className='flex flex-col gap-y-2 justify-between items-start mt-3'>
                        <FaArrowLeft
                            size={25}
                            className='text-textActive cursor-pointer'
                            onClick={() => navigate(-1)}
                        />
                        <p className='font-medium text-gray-800 '>
                            Please add 4 digit code that has been sent to your
                            email
                        </p>
                    </div>
                    <div className='flex justify-start items-start py-5 flex-row gap-x-4'>
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(ref) => (inputsRef.current[index] = ref)}
                                type='text'
                                maxLength='1'
                                className='w-16 h-16 border-none rounded-lg bg-slate-100 text-xl font-bold shadow-md focus:shadow-2xl'
                                value={digit}
                                onChange={(e) =>
                                    handleInputChange(index, e.target.value)
                                }
                                onKeyDown={(e) => handleBackspace(index, e)}
                            />
                        ))}
                    </div>
                    <button
                        className='bg-primary text-white font-medium px-16 py-3 rounded-lg disabled:bg-orange-200 disabled:cursor-not-allowed '
                        disabled={!isOTPComplete}
                        onClick={checkOTP}
                    >
                        Confirm
                    </button>
                    <button
                        className='text-gray-600 text-center underline underline-offset-1 ml-auto mr-5'
                        ref={buttonRef}
                        onClick={handleResendOTP}
                        disabled={resend}
                    >
                        {resend ? (
                            <span className='text-primary font-medium'>
                                OTP sent, Request a new OTP in{' '}
                                <span className='font-bold'> 00:{counter}</span>
                            </span>
                        ) : (
                            <span>Resend OTP</span>
                        )}
                    </button>
                </div>
                <div className='lg:col-span-7 w-[59%]  hidden lg:block fixed top-0 right-0'>
                    <div className="bg-[url('/src/assets/bg.jpeg')] bg-cover h-[100vh] ">
                        <div className='absolute inset-0 bg-black opacity-60'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default (OTP)
