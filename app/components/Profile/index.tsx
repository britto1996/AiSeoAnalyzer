import { Avatar } from '@mui/joy'
import React from 'react'

const Profile = ({ avatar }: { avatar: string }) => {
  return (
    <div className="cursor-pointer">
        <Avatar size="sm" variant="soft" src={avatar} />
    </div>
  )
}

export default Profile