import { Box } from '@mui/material';
import React from 'react'
import Header from '../../components/Header';
import Team from '../team';

const Dashboard = () => {

  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title='DASHBOARD' subtitle='Welcome to your Dashboard'/>
      </Box>
    </Box>
  )
}

export default Dashboard;
