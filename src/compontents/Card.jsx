import React from 'react'

const Card = (props) => {
  return (
    <div className='p-5 mt-5'> 
      <a 
      href={props.elem.url} 
      target='_blank'
      rel='noopener noreferrer'
      className='group block overflow-hidden rounded-xl transition-transform hover:scale-105'
    >
      <div className='relative h-64 w-full overflow-hidden'>
        <img 
          className='h-full w-full object-cover transition-all group-hover:brightness-90' 
          src={props.elem.download_url} 
          alt={props.elem.author}
        />
        <div className='absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-4'>
          <h2 className='font-bold text-lg text-white'>{props.elem.author}</h2>
        </div>
      </div>
    </a>
    </div>
  )
}

export default Card
