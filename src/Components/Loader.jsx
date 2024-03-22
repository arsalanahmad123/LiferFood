import React from 'react'
import { Puff } from 'react-loader-spinner'

const Loader = () => {
    return (
        <>
            <div className='flex justify-center items-center'>
                <div
                    className='fixed inset-0 bg-slate-400 bg-opacity-50 flex justify-center items-center p-10'
                    style={{ zIndex: 1100 }}
                >
                    <Puff
                        visible={true}
                        height='80'
                        width='80'
                        color='#F58201'
                        radius={20}
                        ariaLabel='puff-loading'
                        wrapperStyle={{}}
                        wrapperClass=''
                    />
                </div>
            </div>
        </>
    )
}

export default Loader
