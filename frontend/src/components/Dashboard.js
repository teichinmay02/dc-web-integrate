import React from 'react'
import { Link } from 'react-router-dom'
import img from "../dc.png";

const Dashboard = () => {
  return (
    <>
        <div className='dashboard-width flex justify-center flex-wrap my-8'>
        <div className='card w-72 border border-slate-700 rounded-lg p-4 m-4 shadow-md'>
            <div className='flex justify-between items-center'>
                <img src={img} alt='sherloq' className='w-20 h-20 object-contain' />
                <div className='info'>
                    <p className='text-lg font-semibold'>Sherloq</p>
                    <p className='text-gray-600'>Image Forensics</p>
                </div>
            </div>
            <div className='button pt-4'>
                <Link to='/sherloq' className='bg-sky-800 text-white px-3 py-1 rounded-md float-right hover:bg-sky-900 '>Use Tool</Link>
            </div>
        </div>

        <div className='card w-72 border border-slate-700 rounded-lg p-4 m-4 shadow-md'>
            <div className='flex justify-between items-center'>
                <img src={img} alt='ghiro' className='w-20 h-20 object-contain' />
                <div className='info'>
                    <p className='text-lg font-semibold'>Ghiro</p>
                    <p className='text-gray-600'>Image Forensics</p>
                </div>
            </div>
            <div className='button pt-4'>
                <Link to='http://192.168.56.101/' className='bg-sky-800 text-white px-3 py-1 rounded-md float-right hover:bg-sky-900 ' target="_blank">Use Tool</Link>
            </div>
        </div>

        <div className='card w-72 border border-slate-700 rounded-lg p-4 m-4 shadow-md'>
            <div className='flex justify-between items-center'>
                <img src={img} alt='exiftool' className='w-24 h-20 object-contain' />
                <div className='info'>
                    <p className='text-lg font-semibold'>ExifTool</p>
                    <p className='text-gray-600'>Metadata Extraction</p>
                </div>
            </div>
            <div className='button pt-4'>
                <Link to='exiftool' className='bg-sky-800 text-white px-3 py-1 rounded-md float-right hover:bg-sky-900 '>Use Tool</Link>
            </div>
        </div>

        <div className='card w-72 border border-slate-700 rounded-lg p-4 m-4 shadow-md'>
            <div className='flex justify-between items-center'>
                <img src={img} alt='ffmpeg' className='w-24 h-20 object-contain' />
                <div className='info'>
                    <p className='text-lg font-semibold'>FFmpeg</p>
                    <p className='text-gray-600'>Video Forensics</p>
                </div>
            </div>
            <div className='button pt-4'>
                <Link to='ffmpeg' className='bg-sky-800 text-white px-3 py-1 rounded-md float-right hover:bg-sky-900 '>Use Tool</Link>
            </div>
        </div>

        <div className='card w-72 border border-slate-700 rounded-lg p-4 m-4 shadow-md'>
            <div className='flex justify-between items-center'>
                <img src={img} alt='steghide' className='w-24 h-20 object-contain' />
                <div className='info'>
                    <p className='text-lg font-semibold'>Steghide</p>
                    <p className='text-gray-600'>Steganography</p>
                </div>
            </div>
            <div className='button pt-4'>
                <Link to='steghide' className='bg-sky-800 text-white px-3 py-1 rounded-md float-right hover:bg-sky-900 '>Use Tool</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard