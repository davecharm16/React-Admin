import { useTheme } from '@emotion/react';
import React, {useState} from 'react'
import {ProSidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import { tokens } from '../../theme';
import { Box } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import 'react-pro-sidebar/dist/css/styles.css';
import {Typography, IconButton} from '@mui/material';
import { BalanceOutlined, BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, HelpCenterOutlined, HomeOutlined, MapOutlined, PersonOutlineOutlined, PieChartOutlined, Receipt, TimelineOutlined } from '@mui/icons-material';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import {Link} from 'react-router-dom'


const Item = ({title, to, icon, selected, setSelected}) =>{
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem active = {selected  === title} style={{color : colors.grey[100]}} onClick = {()=>{setSelected(title)}} icon = {icon}>
      <Typography>{title}</Typography>
      <Link to = {to}/>
    </MenuItem>
  )
}

const Sidebar = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed , setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");


  return (
    <Box
      sx={
        {
          "& .pro-sidebar-inner" : {
            background : `${colors.primary[400]} !important`
          },
          "& .pro-icon-wrapper" : {
            backgroundColor : "transparent !important"
          },
          "& .pro-inner-item" : {
            padding : "5px 35px 5px 20px !important"
          },
          "& .pro-inner-item:hover" : {
            color : "#868dfb !important"
          },
          "& .pro-inner-item.active" : {
            color : "#6870fa !important"
          },
        }
      }
    >
      <ProSidebar collapsed={isCollapsed}>
      <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() =>setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* user */}
          {
            !isCollapsed &&
            <Box mb="25px">
              <Box display='flex' justifyContent='center' alignItems='center'>
                <img
                  alt='profile-user'
                  width='100px'
                  height = '100px'
                  src = {`assets/user.png`}
                  style={{ cursor:'pointer', borderRadius : '50%' }}
                />
              </Box>
              <Box textAlign='center'>
                <Typography 
                  variant='h2'
                  color = {colors.grey[100]}
                  fontWeight='bold'
                  sx = {{m: '10px 0 0 0'}}
                >
                  Dave Charm
                </Typography>
                <Typography
                  variant='h5'
                  color = {colors.greenAccent[500]}
                >
                  Admin
                </Typography>
              </Box>
            </Box>
          }

          {/* Menu Items */}
          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            <Item 
              title='Dashboard'
              to = '/'
              icon = {<HomeOutlined/>}
              setSelected={setSelected}
              selected={selected}
            />
            <Typography
              variant='h6'
              color={colors.grey[300]}
              sx = {{m: "15px 0 5px 20px"}}
            >
              Data
            </Typography>
            <Item 
              title='ManageTeam'
              to = '/team'
              icon = {<PeopleOutlineOutlinedIcon/>}
              setSelected={setSelected}
              selected={selected}
            />
            <Item 
              title='Contacts Information'
              to = '/contacts'
              icon = {<ContactsOutlined/>}
              setSelected={setSelected}
              selected={selected}
            />
            <Item 
              title='Invoices Balances'
              to = '/invoices'
              icon = {<Receipt/>}
              setSelected={setSelected}
              selected={selected}
            />
            <Typography
              variant='h6'
              color={colors.grey[300]}
              sx = {{m: "15px 0 5px 20px"}}
            >
              Pages
            </Typography>
            <Item 
              title='Profile Form'
              to = '/form'
              icon = {<PersonOutlinedIcon/>}
              setSelected={setSelected}
              selected={selected}
            />
            <Item 
              title='Calendar'
              to = '/calendar'
              icon = {<CalendarTodayOutlined/>}
              setSelected={setSelected}
              selected={selected}
            />
            <Item 
              title='FAQ Page'
              to = '/faq'
              icon = {<HelpCenterOutlined/>}
              setSelected={setSelected}
              selected={selected}
            />
            <Typography
              variant='h6'
              color={colors.grey[300]}
              sx = {{m: "15px 0 5px 20px"}}
            >
              Charts
            </Typography>
            <Item 
              title='Bar Chart'
              to = '/bar'
              icon = {<BarChartOutlined/>}
              setSelected={setSelected}
              selected={selected}
            />
            <Item 
              title='Pie Chart'
              to = '/pie'
              icon = {<PieChartOutlined/>}
              setSelected={setSelected}
              selected={selected}
            />
            <Item 
              title='Line Chart'
              to = '/line'
              icon = {<TimelineOutlined/>}
              setSelected={setSelected}
              selected={selected}
            />
            <Item 
              title='Geography Chart'
              to = '/geography'
              icon = {<MapOutlined/>}
              setSelected={setSelected}
              selected={selected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default Sidebar
