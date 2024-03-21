import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Navbar from '../components/Navbar';
import "./styles.css"
import Text from '../components/Text';
import { useEffect, useState } from 'react';
import { getUserList } from '../services/user';
import { User } from '../shared/modal';
import { Button } from '@mui/material';
import { Image } from '@mui/icons-material';


function Users() {
    const [userList, setUserList] = useState<User[]>([])

    useEffect(() => {
        loadInitialData()
    }, [])

    const loadInitialData = async () => {
        const users = await getUserList()
        console.log(users)
        setUserList(users)
    }


    const UserTable = () => {
        return (
            <TableContainer component={Paper} className='userTable'>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell align="center">Avatar</StyledTableCell>
                    <StyledTableCell align="center">Name</StyledTableCell>
                    <StyledTableCell align="center">Action</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {userList.map((user) => (
                    <StyledTableRow key={user.id}>
                        <StyledTableCell align="center">
                            <img src={user.avatar_url} className='userAvatar'/>
                        </StyledTableCell>
                        <StyledTableCell align="center">{user.login}</StyledTableCell>
                        <StyledTableCell align="center">
                            <Button variant='contained'>View</Button>    
                        </StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        );
    }

    return (
        <div>
            <Navbar />
            <Text variant="h3" className='heading'>Github User List</Text>
            <div className='tableWrapper'>
                {UserTable()}
            </div>
        </div>
    );
}

export default Users;


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