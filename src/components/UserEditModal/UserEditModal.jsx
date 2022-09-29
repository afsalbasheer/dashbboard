import { Box, Button, Input, InputLabel, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./UserEditModal.css"

const style = {
    position: 'absolute',
    display: "flex",
    flexDirection: "column",
    justifyCOntent: "center",
    alignItems: "center",
    gap: "10px",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };

export default function UserEditModal({ userInfo, onClose, updateList }) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    useEffect(()=>{
        if(userInfo){
            setFirstName(userInfo.first_name)
            setLastName(userInfo.last_name)
            setEmail(userInfo.email)
        }
    },[userInfo])

    const handleEdit = () => {
        userInfo.first_name = firstName
        userInfo.last_name = lastName
        userInfo.email = email
        axios.put(`http://localhost:3000/users/${userInfo.id}`, userInfo).then((response)=>{
            if(response.status === 200){
                updateList()
                onClose()
            }
        })
    }

    return (
        <Box sx={style} className="editBox">
            <Typography variant="h5" gutterBottom>Edit User</Typography>
            <TextField 
                fullWidth 
                value={firstName} 
                id="firstname"
                label="First Name"
                variant="outlined"
                onChange={e => setFirstName(e.target.value)} 
            />
            <TextField 
                fullWidth 
                value={lastName} 
                id="lastname" 
                label="Last Name" 
                variant="outlined" 
                onChange={e => setLastName(e.target.value)} 
            />
            <TextField 
                fullWidth 
                value={email} 
                id="email" 
                label="Email" 
                variant="outlined" 
                onChange={e => setEmail(e.target.value)} 
            />
            <div className='buttonBox'>
                <Button variant="contained" color='error' onClick={onClose}>Cancel</Button>
                <Button variant="contained" onClick={handleEdit}>Update</Button>
            </div>
        </Box>
    )
}
