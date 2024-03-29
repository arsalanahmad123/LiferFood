import React, { useState,  } from 'react'
import NotificationSideBar from '../Components/NotificationSideBar'
import NotificationHolder from '../Components/NotificationHolder'

const Notification = () => {
    const [openSideBar, setOpenSideBar] = useState(false)
    const toggleSideBar = () => {
        setOpenSideBar(!openSideBar)
    }

    return (
        <>
            <div className='flex flex-col relative'>
                <section
                    className='flex flex-col lg:flex-row lg:w-[80vw] lg:h-[70vh] fixed lg:top-16 lg:left-32 w-[80vw] top-16 md:top-28 md:left-20 left-10 bg-white overflow-y-auto h-[50vh] rounded-lg
          '
                    style={{ zIndex: 1100 }}
                >
                    <NotificationSideBar openSideBar={openSideBar} />
                    <section className='w-full md:float-end flex flex-col '>
                        <NotificationHolder
                            toggleSideBar={toggleSideBar}
                            openSideBar={openSideBar}
                        />
                    </section>
                </section>
            </div>
        </>
    )
}

export default (Notification)
