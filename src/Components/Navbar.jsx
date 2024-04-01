import React, { useState, useCallback } from 'react'
import { GoBell } from 'react-icons/go'
import { BiSolidMessageSquareDots, BiSearch } from 'react-icons/bi'
import { HiMiniBars3BottomLeft } from 'react-icons/hi2'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
import toast from 'react-hot-toast'
import { FormattedMessage, IntlProvider } from 'react-intl';

const Navbar = ({ changeLocale, locale }) => {
    const [showProfileDropdown, setShowProfileDropdown] = useState(false)
    const [showChat, setShowChat] = useState(false)
    const [showNotification, setShowNotification] = useState(false)

    const { logoutUser, loggedIn, user } = useAuth()

    const handleLogout = useCallback(() => {
        toast('You have been logged out')
        logoutUser()
    }, [logoutUser])

    const toggleChat = useCallback(() => {
        setShowChat((prevShowChat) => !prevShowChat)
        if (showNotification) {
            setShowNotification(false)
        }
    }, [showNotification])
    const toggleNotification = useCallback(() => {
        setShowNotification((prevShowNotification) => !prevShowNotification)
        if (showChat) {
            setShowChat(false)
        }
    }, [showChat])

    const handleSidebarToggle = () => {
        const sidebar = document.getElementById('sidebar')
        const overlay = document.getElementById('overlay')
        sidebar.classList.remove('translate-x-[-100%]')
        sidebar.classList.add('translate-x-0')
        overlay.classList.remove('hidden')
    }

    const closeSideBar = () => {
        const sidebar = document.getElementById('sidebar')
        const overlay = document.getElementById('overlay')
        sidebar.classList.add('translate-x-[-100%]')
        overlay.classList.add('hidden')
    }

    return (
        <>

            <div className='w-full flex flex-row px-10 lg:justify-end justify-between items-center md:gap-x-3 p-4'>
                <div className='lg:hidden bg-linkBg p-2 rounded-lg text-textActive cursor-pointer'>
                    <HiMiniBars3BottomLeft
                        size={20}
                        onClick={handleSidebarToggle}
                    />
                </div>
                <nav>
                    <select className='rounded-full border-textActive focus:outline-none focus:ring-0 focus:border-textActive' value={locale} onChange={(e) => changeLocale(e.target.value)}>
                        <option value="en">English</option>
                        <option value="de">German</option>
                    </select>
                </nav>

                <div className='flex flex-row gap-x-3 md:border-r md:border-gray-400 px-5 md:pl-[40%] relative'>
                    <div
                        className='bg-linkBg p-2 rounded-lg font-extrabold cursor-pointer relative'
                        onClick={toggleNotification}
                    >
                        <GoBell className='text-textActive' />
                        <div className='w-[15px] h-[15px] bg-primary rounded-full absolute top-[-5px] right-[-5px]'></div>
                        {showNotification && (
                            <div
                                className='bg-white shadow-xl flex flex-col absolute md:w-[300px] w-[200px] top-10 -right-28 rounded-lg max-h-[300px] scrollable '
                                style={{ zIndex: 9999 }}
                                id='notifications'
                            >
                                <div className='bg-slate-200 flex flex-row justify-between items-center p-2 rounded-tl-lg'>
                                    <h4 className='text-sm'>
                                        <FormattedMessage id='DMs_from_customers' />
                                    </h4>
                                    <BiSearch />
                                </div>
                                <div className=' max-h-full py-1 px-1'>
                                    <ul className='flex flex-col'>
                                        <li className='w-full hover:bg-textActive hover:text-white hover:rounded-md transition-all duration-300 ease-in-out'>
                                            <div className='mx-auto flex flex-row justify-center items-start  p-1  cursor-pointer gap-x-6 border-b lg:border-none'>
                                                <div className='w-10 rounded-full'>
                                                    <img
                                                        src='https://i.pravatar.cc/50'
                                                        alt=''
                                                        className='rounded-full'
                                                    />
                                                </div>
                                                <div className='flex flex-col'>
                                                    <span className='font-medium'>
                                                        Username
                                                    </span>
                                                    <span className='text-sm '>
                                                        Lorem ipsum dolor sit
                                                        amet.
                                                    </span>
                                                </div>
                                                <div className='text-xs font-semibold'>
                                                    <span>10/19</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='w-full hover:bg-textActive hover:text-white hover:rounded-md transition-all duration-300 ease-in-out'>
                                            <div className='mx-auto flex flex-row justify-center items-start  p-1  cursor-pointer gap-x-6 border-b lg:border-none'>
                                                <div className='w-10 rounded-full'>
                                                    <img
                                                        src='https://i.pravatar.cc/50'
                                                        alt=''
                                                        className='rounded-full'
                                                    />
                                                </div>
                                                <div className='flex flex-col'>
                                                    <span className='font-medium'>
                                                        Username
                                                    </span>
                                                    <span className='text-sm '>
                                                        Lorem ipsum dolor sit
                                                        amet.
                                                    </span>
                                                </div>
                                                <div className='text-xs font-semibold'>
                                                    <span>10/19</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='w-full hover:bg-textActive hover:text-white hover:rounded-md transition-all duration-300 ease-in-out'>
                                            <div className='mx-auto flex flex-row justify-center items-start  p-1  cursor-pointer gap-x-6 border-b lg:border-none'>
                                                <div className='w-10 rounded-full'>
                                                    <img
                                                        src='https://i.pravatar.cc/50'
                                                        alt=''
                                                        className='rounded-full'
                                                    />
                                                </div>
                                                <div className='flex flex-col'>
                                                    <span className='font-medium'>
                                                        Username
                                                    </span>
                                                    <span className='text-sm'>
                                                        Lorem ipsum dolor sit
                                                        amet.
                                                    </span>
                                                </div>
                                                <div className='text-xs font-semibold'>
                                                    <span>10/19</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='w-full hover:bg-textActive hover:text-white hover:rounded-md transition-all duration-300 ease-in-out'>
                                            <div className='mx-auto flex flex-row justify-center items-start  p-1  cursor-pointer gap-x-6 border-b lg:border-none'>
                                                <div className='w-10 rounded-full'>
                                                    <img
                                                        src='https://i.pravatar.cc/50'
                                                        alt=''
                                                        className='rounded-full'
                                                    />
                                                </div>
                                                <div className='flex flex-col'>
                                                    <span className='font-medium'>
                                                        Username
                                                    </span>
                                                    <span className='text-sm'>
                                                        Lorem ipsum dolor sit
                                                        amet.
                                                    </span>
                                                </div>
                                                <div className='text-xs font-semibold'>
                                                    <span>10/19</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                    <div
                        className='bg-linkBg p-2 rounded-lg text-textActive font-extrabold cursor-pointer relative'
                        onClick={toggleChat}
                    >
                        <BiSolidMessageSquareDots />
                        <div className='w-[15px] h-[15px] bg-primary rounded-full absolute top-[-5px] right-[-5px]'></div>
                    </div>
                    {showChat && (
                        <div
                            className='bg-white shadow-xl flex flex-col absolute md:w-[300px] w-[200px] top-10 -right-28 rounded-lg max-h-[300px] scrollable '
                            style={{ zIndex: 9999 }}
                            id='chats'
                        >
                            <div className='bg-slate-200 flex flex-row justify-between items-center p-2 rounded-tl-lg'>
                                <h4 className='text-sm'><FormattedMessage id='DMs_from_customers' /></h4>
                                <BiSearch />
                            </div>
                            <div className=' max-h-full py-1 px-1'>
                                <ul className='flex flex-col'>
                                    <li className='w-full hover:bg-textActive hover:text-white hover:rounded-md transition-all duration-300 ease-in-out'>
                                        <div className='mx-auto flex flex-row justify-center items-start  p-1  cursor-pointer gap-x-6 border-b lg:border-none'>
                                            <div className='w-10 rounded-full'>
                                                <img
                                                    src='https://i.pravatar.cc/50'
                                                    alt=''
                                                    className='rounded-full'
                                                />
                                            </div>
                                            <div className='flex flex-col'>
                                                <span className='font-medium'>
                                                    Username
                                                </span>
                                                <span className='text-sm '>
                                                    Lorem ipsum dolor sit amet.
                                                </span>
                                            </div>
                                            <div className='text-xs font-semibold'>
                                                <span>10/19</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='w-full hover:bg-textActive hover:text-white hover:rounded-md transition-all duration-300 ease-in-out'>
                                        <div className='mx-auto flex flex-row justify-center items-start  p-1  cursor-pointer gap-x-6 border-b lg:border-none'>
                                            <div className='w-10 rounded-full'>
                                                <img
                                                    src='https://i.pravatar.cc/50'
                                                    alt=''
                                                    className='rounded-full'
                                                />
                                            </div>
                                            <div className='flex flex-col'>
                                                <span className='font-medium'>
                                                    Username
                                                </span>
                                                <span className='text-sm '>
                                                    Lorem ipsum dolor sit amet.
                                                </span>
                                            </div>
                                            <div className='text-xs font-semibold'>
                                                <span>10/19</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='w-full hover:bg-textActive hover:text-white hover:rounded-md transition-all duration-300 ease-in-out'>
                                        <div className='mx-auto flex flex-row justify-center items-start  p-1  cursor-pointer gap-x-6 border-b lg:border-none'>
                                            <div className='w-10 rounded-full'>
                                                <img
                                                    src='https://i.pravatar.cc/50'
                                                    alt=''
                                                    className='rounded-full'
                                                />
                                            </div>
                                            <div className='flex flex-col'>
                                                <span className='font-medium'>
                                                    Username
                                                </span>
                                                <span className='text-sm'>
                                                    Lorem ipsum dolor sit amet.
                                                </span>
                                            </div>
                                            <div className='text-xs font-semibold'>
                                                <span>10/19</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='w-full hover:bg-textActive hover:text-white hover:rounded-md transition-all duration-300 ease-in-out'>
                                        <div className='mx-auto flex flex-row justify-center items-start  p-1  cursor-pointer gap-x-6 border-b lg:border-none'>
                                            <div className='w-10 rounded-full'>
                                                <img
                                                    src='https://i.pravatar.cc/50'
                                                    alt=''
                                                    className='rounded-full'
                                                />
                                            </div>
                                            <div className='flex flex-col'>
                                                <span className='font-medium'>
                                                    Username
                                                </span>
                                                <span className='text-sm'>
                                                    Lorem ipsum dolor sit amet.
                                                </span>
                                            </div>
                                            <div className='text-xs font-semibold'>
                                                <span>10/19</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
                <div className='text-primary hidden md:block'>
                    <span className='text-[15px]'><FormattedMessage id='welcome' />,{'   '}</span>
                    <span className='font-semibold'>{user?.first_name}</span>
                </div>
                <div className='relative'>
                    <img
                        src='/src/assets/profile.png'
                        className='w-[50px] h-[50px] rounded-full cursor-pointer'
                        alt='Profile Image'
                        onClick={() =>
                            setShowProfileDropdown(!showProfileDropdown)
                        }
                    />

                    <div
                        className={`px-5 py-3 bg-white rounded-md absolute top-[50px] right-2 transition-all duration-500 ease-in-out ${showProfileDropdown ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <ul className='flex flex-col gap-y-3'>
                            <li className='cursor-pointer'>Profile</li>
                            {!loggedIn && (
                                <NavLink to='/account/login'>
                                    <li className='cursor-pointer'>Log In</li>
                                </NavLink>
                            )}
                            {loggedIn && (
                                <li
                                    className='cursor-pointer font-semibold text-red-500'
                                    onClick={handleLogout}
                                >
                                    Logout
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div
                    id='overlay'
                    className='w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] hidden z-10'
                    onClick={closeSideBar}
                ></div>
            </div>
        </>
    )
}

export default Navbar
