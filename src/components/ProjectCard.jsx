import React from 'react'

function ProjectCard({data}) {
  return (
    <div className='w-full  relative md:w-1/2'>
      <img className='w-full'  src={data.img} alt="" />
      <div className='absolute hidden  w-full h-full bg-zinc-900 hover:flex items-center justify-center text-3xl font-bold tracking-tight italic top-0 bg-opacity-40'>
        <h1>{data.title}</h1>
      </div>
    </div>
  )
}

export default ProjectCard