import * as React from "react";
// @MUI Componens
import {
    AppBar,
    Toolbar,
    Typography,
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
                {/*TODO: Make a side nav with different stuff appear when you click this*/}
                <IconButton edge="start" color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{flexGrow: 1}}>
                  {'Fortnite Stats'}
                </Typography>
              </Toolbar>
            </AppBar>
          </div>
      
        )
    }
}


export default MainNav;