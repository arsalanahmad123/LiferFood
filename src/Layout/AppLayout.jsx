import React, { memo } from 'react'
import Navbar from '../Components/Navbar'
import SideBar from '../Components/SideBar'

const AppLayout = () => (WrappedComponent) => {
    const MemoWrappedComponent = memo(WrappedComponent)
    return (props) => {
        return (
            <>
                {/* <Navbar /> */}
                <SideBar />
                <MemoWrappedComponent {...props} />
            </>
        )
    }
}

export default AppLayout
