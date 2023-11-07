import React from 'react'

const Services = ({ img, h1, p }) => {
    return (
        <>
            <div className='flex flex-col shadow-md sm:px-8 sm:py-12 sm:w-[300px] w-[90%] px-4 py-8 h-[100%] place-items-center justify-between'>
                <img src={img} alt="" className='w-[100px] ' />
                <h1 className='sm:text-3xl text-center text-xl font-semibold mt-4'>{h1}</h1>
                <p className='mt-4 text-lg text-gray-500'>{p}</p>
            </div>
        </>
    )
}

export default Services
