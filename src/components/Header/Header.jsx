import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material';
import React from 'react'

const Header = () => {
  return (
      <>
        <CssBaseline/>
        <AppBar sx={{ backgroundColor: "#b8b800" }} component="nav">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Apollo-React test-app
            </Typography>
          </Toolbar>
        </AppBar>
    </>
  );
}

export default Header
