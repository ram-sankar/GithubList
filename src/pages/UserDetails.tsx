import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import Navbar from '../components/Navbar';
import { getUserByUserName } from '../services/user';
import { User } from '../shared/modal';
import './styles.css'
import Text from '../components/Text';

function UserDetails() {
    const params = useParams()
    const [userDetails, setUserDetails] = useState<User|null>(null)

    useEffect(() => {
      loadInitialData()
    }, [])

    const loadInitialData = async () => {
      if (params.userName) {
        const user = await getUserByUserName(params.userName)
        setUserDetails(user)
      }
    }

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

  const card = (
    <>
      <CardContent>
        <img src={userDetails?.avatar_url} className='userAvatar'/>
        <Text sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {userDetails?.login}
        </Text>
        <Text variant="h5" component="div">
          {userDetails?.name}
        </Text>
        <Text sx={{ mb: 1.5 }} color="text.secondary">
          {userDetails?.location}
        </Text>
        <Text variant="body2">
          {userDetails?.company}
        </Text>
      </CardContent>
    </>
  );


    const RenderUserDetails = () => {
      return <div className='wrapper'>
          <Card variant="outlined" className='cardContainer'>{card}</Card>
      </div>
    }

  return (
    <div>
      <Navbar />
      {userDetails ? RenderUserDetails() : "Data not Found!"}
    </div>
  );
}

export default UserDetails;