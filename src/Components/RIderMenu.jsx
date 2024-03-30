import React from 'react'
import HeaderSection from '../Components/HeaderSection'
import { FormattedMessage } from 'react-intl'

const RIderMenu = ({
    toggleRiderForm,
    heading,
    para,
    image,
    modalButtonText,
}) => {
    return (
        <>
            <HeaderSection heading={heading} para={para} />
            <div className='flex flex-row'>
                <div className='bg-textActive rounded-lg p-5 flex flex-col-reverse md:flex-row justify-center items-center gap-y-5 mx-5 lg:mx-0 mt-5 md:w-72'>
                    <div className='flex flex-col md:justify-start md:items-start'>
                        <h6 className='text-white font-medium text-sm pb-2 text-center md:text-left'>
                            <FormattedMessage id='Please, organize your menus through button below'/>
                        </h6>
                        <button
                            className='bg-gray-300 text-gray-700 rounded-lg py-2 px-4'
                            onClick={toggleRiderForm}
                        >
                            {modalButtonText}
                        </button>
                    </div>
                    <div>
                        <img src={image} className='w-[90px] md:w-[200px]' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RIderMenu
