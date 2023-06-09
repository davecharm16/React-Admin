import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme'
import React from 'react'

const Header = ({title, subtitle}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)

  return (
    <Box mb='30px'>
      <Typography
        variant='h2'
        fontWeight='bold'
        sx={{
          mb: '5px'
        }}
        color = {colors.grey[100]}
      >
        {title}
      </Typography>
      <Typography
        variant='h5'
        color = {colors.greenAccent[400]}
      >
        {subtitle}
      </Typography>
    </Box>
  )
}

export default Header
