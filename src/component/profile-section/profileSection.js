import React from 'react'
import Profile from '../profile/profile'
import Search from '../search/search'

export default function ProfileSection() {
  return (
    <div className='p-4'>
      <Profile/>
      <Search/>
    </div>
  )
}
