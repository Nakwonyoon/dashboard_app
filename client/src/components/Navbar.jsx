import React, { useState } from "react";
import { 
  LightModeOutlined,
  DarkModeOutlined, 
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from '@mui/icons-material'
import { Button, Box, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FlexBetween from './FlexBetween'
import { useDispatch } from 'react-redux'
import { setMode } from 'state'
import profileImage from 'assets/profile.jpeg'

import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  useTheme,
  Typography,
  Menu,
} from "@mui/material";

const Navbar = ({ isSideBarOpen, setIsSideBarOpen, user }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [anchorEL, setAnchorEL] = useState(null);
  const [isOpen, setIsOpen] = useState(anchorEL);

  const handleClick  = (event) => setAnchorEL(event.currentTarget);
  const handleClose = () => setAnchorEL(null);

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* left */}
        <FlexBetween>
          <IconButton onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="2rem"
            p="0.1rem 1.5rem">
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>
        {/* right */}

        <FlexBetween gap="1rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined />
          </IconButton>
          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}>
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="14px"
                  sx={{
                    color: theme.palette.secondary[200],
                  }}>
                  {user.name}
                </Typography>
                <Typography
                  fontSize="10px"
                  sx={{
                    color: theme.palette.secondary[200],
                  }}>
                  {user.occupation}
                </Typography>
                <ArrowDropDownOutlined
                  sx={{
                    color: theme.palette.secondary[300],
                    fontSize: "25px",
                  }}
                  />
              </Box>
            </Button>
            <Menu
            anchorEl={anchorEL}
            open={isOpen}
            onClose={handleClose}
            anchorOrigin={{vertical : 'bottom', horizontal: 'center'}}
            >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar
