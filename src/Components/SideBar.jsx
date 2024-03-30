import {
    IoHomeOutline,
    IoDocumentOutline,
    IoBicycleOutline,
} from 'react-icons/io5'
import React, { memo } from 'react'
import { RiMenu2Fill } from 'react-icons/ri'
import { FiClock } from 'react-icons/fi'
import { TfiWallet } from 'react-icons/tfi'
import { MdOutlineContactSupport } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { FormattedMessage } from 'react-intl';


const SideBar = () => {
    return (
        <>
            <div
                className='w-[200px] md:w-[250px] lg:block lg:w-[250px] min-h-full  bg-white pt-10 fixed top-0 left-0 transition-transform duration-500 transform lg:translate-x-0 translate-x-[-100%]  shadow-2xl shadow-gray-400'
                style={{ zIndex: 900 }}
                id='sidebar'
            >
                <div className='flex flex-col justify-center items-center gap-y-5 '>
                    <img
                        src='/src/assets/logo.png'
                        className='w-[200px] px-4 md:px-0'
                        alt=''
                    />
                    <ul className='flex flex-col gap-y-2 w-full'>
                        <li className=' text-[14px] w-full relative'>
                            <NavLink
                                className=' w-[70%] mx-auto flex flex-row justify-start items-center gap-x-3  p-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-linkBg hover:text-textActive'
                                to={'/'}
                            >
                                <IoHomeOutline size={18} />
                                <span><FormattedMessage id='dashboard'/></span>
                            </NavLink>
                        </li>
                        <li className=' text-[14px] relative w-full'>
                            <NavLink
                                className='w-[70%] mx-auto flex flex-row justify-start items-center gap-x-3 hover:bg-linkBg hover:text-textActive p-2 rounded-md cursor-pointer transition-all duration-300'
                                to={'/menu'}
                            >
                                <RiMenu2Fill size={18} />
                                <span><FormattedMessage id='menu'/></span>
                            </NavLink>
                        </li>
                        <li className='  text-[14px] relative w-full '>
                            <NavLink
                                className='w-[70%] mx-auto flex flex-row justify-start items-center gap-x-3 p-2  rounded-md cursor-pointer transition-all duration-300 hover:bg-linkBg hover:text-textActive'
                                to={'/order-history'}
                            >
                                <FiClock size={18} />
                                <span><FormattedMessage id='order_history'/></span>
                            </NavLink>
                        </li>
                        <li className='  text-[14px] relative w-full'>
                            <NavLink
                                className='w-[70%] mx-auto flex flex-row justify-start items-center gap-x-3  p-2  rounded-md cursor-pointer transition-all duration-300 hover:bg-linkBg hover:text-textActive'
                                to={'/orders'}
                            >
                                <IoDocumentOutline size={18} />
                                <span><FormattedMessage id='orders'/></span>
                            </NavLink>
                        </li>
                        <li className='  text-[14px] relative w-full'>
                            <NavLink
                                className='mx-auto flex flex-row justify-start items-center gap-x-3 w-[70%] p-2  rounded-md cursor-pointer transition-all duration-300 hover:bg-linkBg hover:text-textActive'
                                to={'/revenue'}
                            >
                                <TfiWallet size={18} />
                                <span><FormattedMessage id='revenue'/> </span>
                            </NavLink>
                        </li>
                        <li className='  text-[14px] relative w-full'>
                            <NavLink
                                className='mx-auto flex flex-row justify-start items-center gap-x-3 w-[70%] p-2 hover:bg-linkBg hover:text-textActive rounded-md cursor-pointer transition-all duration-300'
                                to={'/riders'}
                            >
                                <IoBicycleOutline size={18} />
                                <span><FormattedMessage id='riders'/> </span>
                            </NavLink>
                        </li>
                        <li className='  text-[14px] relative w-full'>
                            <NavLink
                                className='mx-auto  flex flex-row justify-start items-center gap-x-3 w-[70%] p-2 hover:bg-linkBg hover:text-textActive rounded-md cursor-pointer transition-all duration-300'
                                to={'/help'}
                            >
                                <MdOutlineContactSupport size={18} />
                                <span><FormattedMessage id='help_and_support'/></span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default memo(SideBar)
