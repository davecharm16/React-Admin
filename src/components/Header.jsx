import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme'
import React from 'react'

const Header = ({title, subtitle}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  
  return (
    <Box>
      {}
    </Box>
  )
}

export default Header
