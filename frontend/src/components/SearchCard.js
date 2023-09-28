import React from 'react'
import { Link } from 'react-router-dom'

const SearchCard = (props) => {
  return (
    <Link to={props.detail.url} className='search-card flex items-center md:w-[22rem] p-2 my-2 m-auto rounded-lg bg-zinc-300 hover:bg-zinc-350 transition-colors border border-slate-400 shadow-md'>
        <img className='avatar py-5 mr-4 w-20 object-cover' src={props.detail.imgurl} alt="" />
        <div className="content text-black">
          <p className='text-lg font-semibold'>{props.detail.name}</p>
          <p className='text-gray-700'>{props.detail.category}</p>
        </div>
    </Link>
  )
}

export default SearchCard