import React from 'react'
import UserList from "../../components/UserList/UserList"
import DashboardLayout from '../../layout/DashboardLayout'
import "./UserListPage.css"

function UserListPage() {
  return (
    <DashboardLayout>
      <div className='userListPage'>
          <UserList />
      </div>
    </DashboardLayout>
  )
}

export default UserListPage