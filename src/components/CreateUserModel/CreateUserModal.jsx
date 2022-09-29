import { Box, Button, Input, InputLabel, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./CreateUserModal.css"

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

export default function CreateUserModal({ onClose, updateList }) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    console.log(firstName)

    const idCreator = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const handleCreate = () => {
        let id =  idCreator(1,100)
        const reqData = {
            id,
            first_name: firstName,
            last_name: lastName,
            email
        }
        console.log(reqData)
        axios.post(`https://fake-api-user.herokuapp.com/users`, reqData).then((response)=>{
            if(response.status === 201){
                updateList()
                onClose()
            }
          })
    }

    return (
        <Box sx={style} className="editBox">
            <Typography variant="h5" gutterBottom>Create User</Typography>
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
                <Button variant="contained" onClick={handleCreate}>Create</Button>
            </div>
        </Box>
    )
}
