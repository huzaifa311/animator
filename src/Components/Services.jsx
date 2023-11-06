import React from 'react'

const Services = ({ img, h1, p }) => {
    return (
        <>
            <div className='flex flex-col shadow-xl'>
                <img src={img} alt="" className='w-[100px] mx-[35%] sm:mx-[38%] md:mx-[40%]' />
                <h1 className='sm:text-3xl w-[350px] text-xl text-center font-semibold mt-4'>{h1}</h1>
                <p className='sm:w-[350px] w-[280px] p-2 text-center mt-4 text-lg text-gray-500'>{p}</p>
            </div>
        </>
    )
}

export default Services
