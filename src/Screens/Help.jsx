import React, { useState,  } from 'react'
import { MdOutlineLiveHelp } from 'react-icons/md'
import Wrapper from '../Components/Wrapper'
import HeaderSection from '../Components/HeaderSection'
import { IoMdArrowDropdown } from 'react-icons/io'
import { Form, NavLink } from 'react-router-dom'
import AppLayout from '../Layout/AppLayout'
import { FormattedMessage } from 'react-intl'
const Help = ({ toggleRepresentator }) => {
    const [selectedRow, setSelectedRow] = useState(null)

    const answer = [
        {
            id: 1,
            answer: 'Grilled Chicken Caesar Salad: Fresh twist with grilled chicken, crunchy croutons, and Parmesan on crisp romaine, drizzled with our signature Caesar dressing.',
        },
        {
            id: 2,
            answer: 'Grilled Chicken Caesar Salad: Fresh twist with grilled chicken, crunchy croutons, and Parmesan on crisp romaine, drizzled with our signature Caesar dressing.',
        },
        {
            id: 3,
            answer: 'Grilled Chicken Caesar Salad: Fresh twist with grilled chicken, crunchy croutons, and Parmesan on crisp romaine, drizzled with our signature Caesar dressing.',
        },
        {
            id: 4,
            answer: 'Grilled Chicken Caesar Salad: Fresh twist with grilled chicken, crunchy croutons, and Parmesan on crisp romaine, drizzled with our signature Caesar dressing.',
        },
        {
            id: 5,
            answer: 'Grilled Chicken Caesar Salad: Fresh twist with grilled chicken, crunchy croutons, and Parmesan on crisp romaine, drizzled with our signature Caesar dressing.',
        },
    ]

    const handleRowClick = (id) => {
        setSelectedRow(id === selectedRow ? null : id)
    }

    return (
        <>
            <Wrapper>
                <div className='relative'>
                    <div className=''>
                        <HeaderSection
                            heading={<FormattedMessage id='Help'/>}
                            para={<FormattedMessage id='How can we help you?'/>}
                        />
                        <div className='pt-5'>
                            <div className='flex flex-col md:flex-row gap-4 md:px-20 px-8 py-10'>
                                <NavLink
                                    className='bg-amber-700 rounded-xl p-4 flex flex-col md:flex-row items-center justify-center gap-x-2 gap-y-3'
                                    to={'/help-form'}
                                >
                                    <div className='p-10 bg-amber-600 rounded-full'>
                                        <MdOutlineLiveHelp className='text-4xl text-white ' />
                                    </div>
                                    <div className='text-center md:text-left'>
                                        <h6 className='md:text-xl text-lg font-semibold text-white'>
                                            <FormattedMessage id='Create Ticket'/>
                                        </h6>
                                        <p className='text-white text-[14px] md:text-base'>
                                            <FormattedMessage id="To initiate a one-to-one chat with the support team, please click on this Button"/>
                                        </p>
                                    </div>
                                </NavLink>
                                <div
                                    className='bg-yellow-500 rounded-xl p-4 flex items-center justify-center flex-col md:flex-row gap-x-2 gap-y-3'
                                    onClick={toggleRepresentator}
                                >
                                    <div className='p-10 bg-yellow-600 rounded-full'>
                                        <MdOutlineLiveHelp className='text-4xl text-white' />
                                    </div>
                                    <div className='text-center md:text-left'>
                                        <h6 className='md:text-xl text-lg font-semibold text-white'>
                                            <FormattedMessage id='Agent'/>
                                        </h6>
                                        <p className='text-white text-[14px] md:text-base'>
                                           <FormattedMessage id="To initiate a one-to-one chat with the support team, please click on this Button"/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center align-center flex-col bg-white p-1 rounded-lg lg:mr-20 mt-6 py-2 mx-5 lg:mx-0'>
                                <div className='py-3'>
                                    <h6 className='text-xl font-bold pl-3'>
                                        <FormattedMessage id="FAQS"/>
                                    </h6>
                                </div>
                                <table className='w-full'>
                                    <tbody>
                                        {answer.map((item) => (
                                            <React.Fragment key={item.id}>
                                                <tr className=' border-b'>
                                                    <td className='px-4 py-2 '>
                                                        <FormattedMessage id="How can I update my restaurant's menu?"/>
                                                    </td>
                                                    <td className='px-4 py-2'>
                                                        <IoMdArrowDropdown
                                                            size={20}
                                                            className='cursor-pointer border rounded-full'
                                                            onClick={() =>
                                                                handleRowClick(
                                                                    item.id,
                                                                )
                                                            }
                                                        />
                                                    </td>
                                                </tr>
                                                {selectedRow === item.id && (
                                                    <tr>
                                                        <td
                                                            colSpan='10'
                                                            className='p-4'
                                                            style={{
                                                                background:
                                                                    '#FFB100',
                                                            }}
                                                        >
                                                            <table className='table-auto w-full'>
                                                                <td className='px-4 py-2'>
                                                                    {
                                                                        item.answer
                                                                    }
                                                                </td>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default AppLayout()(Help)
