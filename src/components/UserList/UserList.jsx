import "./UserList.css"
import {useEffect, useState} from "react";
import axios from "axios"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import UserEditModal from "../UserEditModal/UserEditModal";
import { Box, Modal } from "@mui/material";
import CreateUserModal from "../CreateUserModel/CreateUserModal";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


function UserList() {
    const [usersList,setUsersList] = useState([])
    const [openEditModal, setOpenEditModal] = useState(false)
    const [openCreateModal, setOpenCreateModal] = useState(false)
    const [selectedUser, setSelectedUser] = useState()


  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const updateList = () => {
    axios.get("https://fake-api-user.herokuapp.com/users").then((response)=>{
      setUsersList(response.data)
    })
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 6));
    setPage(0);
  };

  const onDelete = (id) => {
    axios.delete(`https://fake-api-user.herokuapp.com/users/${id}`).then((response)=>{
      if(response.status === 200){
        let newUsersList = usersList.filter(item => item.id != id) 
        setUsersList(newUsersList)
      }
    })
  }

  const onEdit = (user) => {
    setSelectedUser(user)
    setOpenEditModal(true)
  }

  const createUser = () => {
    setOpenCreateModal(true)
  }

  const handleCloseEditModal = () => {
    setOpenEditModal(false)
  }

  const handleCloseCreateModal = () => {
    setOpenCreateModal(false)
  }

  useEffect(() => {
    updateList()
  },[])

  return (
    <div>
    <Box display="flex" justifyContent="flex-end" style={{width:"100%", margin:"10px 0px"}}>
      <Button variant="contained" className="CreateBtn" onClick={createUser}>Create</Button>
    </Box>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No:</StyledTableCell>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">First Name</StyledTableCell>
            <StyledTableCell align="center">Last Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
            {
            
            usersList && usersList.length > 0 ? 
            
              usersList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item,index)=>{
                  
              return(
                <StyledTableRow Key={item.id}>
                <StyledTableCell component="th" scope="row">
                  {index}
                </StyledTableCell>
                <StyledTableCell align="center">{item.id}</StyledTableCell>
                <StyledTableCell align="center">{item.first_name}</StyledTableCell>
                <StyledTableCell align="center">{item.last_name}</StyledTableCell>
                <StyledTableCell align="center">{item.email}</StyledTableCell>
                <StyledTableCell align="center">
                  <div className="buttonField">
                  <Button variant="contained" onClick={()=>onEdit(item)}>Edit</Button>
                  <DeleteOutlineIcon className="deleteBtn" onClick={()=>onDelete(item.id)}/>
                  </div>              
                  
                  </StyledTableCell>
                
              </StyledTableRow>
              );
            
              })
            :
              null
            }
        </TableBody>
      </Table>
      <TablePagination
      component="div"
      count={12}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
    </TableContainer>

    {/* CREATE MODAL */}
    <Modal
      open={openCreateModal}
      onClose={handleCloseCreateModal}
      className="modalBox"
    >
      <CreateUserModal
        onClose={handleCloseCreateModal}
        updateList={updateList}
      />
    </Modal>


    {/* EDIT MODAL */}
    <Modal
      open={openEditModal}
      onClose={handleCloseEditModal}
      className="modalBox"
    >
      <UserEditModal 
        onClose={handleCloseEditModal}
        userInfo={selectedUser}
        updateList={updateList}
      />
    </Modal>
    </div>
  )
}

export default UserList