import * as React from "react";
// @MUI Componens
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton
}                               from '@material-ui/core';
// @MUI Icons
import MenuIcon                 from '@material-ui/icons/Menu';

class MainNav extends React.PureComponent {
    render() {
        return (
          <div style={{flexGrow: 1}}>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{flexGrow: 1}}>
                  {'My Reads'}
                </Typography>
                <Button color="inherit">{'Login'}</Button>
              </Toolbar>
            </AppBar>
          </div>
      
        )
    }
}


export default MainNav;