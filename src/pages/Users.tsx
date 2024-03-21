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
import { UserList } from '../shared/modal';
import { Button, Typography } from '@mui/material';
import { Image } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import AppButton from '../components/Button';


function Users() {
    const [userList, setUserList] = useState<UserList[]>([])

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
                            <Text variant='subtitle1' component={Link} to={`/user/${user.login}`}>
                                <AppButton variant='contained'>View</AppButton>    
                            </Text>
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
            <div className='wrapper'>
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