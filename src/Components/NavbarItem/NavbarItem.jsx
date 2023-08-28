import React from 'react'

const NavbarItem = ({label, onClick}) => {
  return (
    <div onClick={onClick} className='text-white cursor-pointer hover:text-gray-300 transition'>
        {label}
    </div>
  )
}

export default NavbarItem