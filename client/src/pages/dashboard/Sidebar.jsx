import React from 'react'
import { RxDashboard } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'
import dashboard_icon from '../../assets/dashboard-icon.png'
import add_icon from '../../assets/add.png'
import pin from '../../assets/pushpin.png'

const Sidebar = () => {
    return (
        <div className='flex flex-col bg-[#1e1e1e] text-white min-h-full pt-6'>
            <NavLink end={true} to={'/dashboard'} className={({ isActive }) => `flex items-center gap-2 pl-5 p-3 lg:min-w-52 md:min-w-48 cursor-pointer ${isActive && 'bg-[#3858e9]'} `}>
                <img src={dashboard_icon} className='w-4.5' alt="dashboard icon" />
                {/* <img src={home_icon} alt="" className='min-w-4 w-5' /> */}
                <h6 className='hidden md:inline-block text-sm'>Dashboard</h6>
            </NavLink>
            <NavLink end={true} to={'/dashboard/add-post'} className={({ isActive }) => `flex items-center gap-2 pl-5 p-3 lg:min-w-52 md:min-w-48 cursor-pointer ${isActive && 'bg-[#3858e9]'} `}>
                <img src={add_icon} className='w-4.5' alt="plus" />
                {/* <img src={home_icon} alt="" className='min-w-4 w-5' /> */}
                <h6 className='hidden md:inline-block text-sm'>Add Post</h6>
            </NavLink>
            <NavLink end={true} to={'/dashboard/posts'} className={({ isActive }) => `flex items-center gap-2 pl-5 p-3 lg:min-w-52 md:min-w-48 cursor-pointer ${isActive && 'bg-[#3858e9]'} `}>
                <img src={pin} className='w-4.5' alt="push pin" />
                {/* <img src={home_icon} alt="" className='min-w-4 w-5' /> */}
                <h6 className='hidden md:inline-block text-sm'>Post List</h6>
            </NavLink>
        </div>
    )
}

export default Sidebar