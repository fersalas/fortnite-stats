import * as React from "react";
// @MUI Componens
import {
    AppBar,
    Toolbar,
    Typography,
}                               from '@material-ui/core';

interface MainNavProps {
  drawerWidth: number,
}

class MainNav extends React.PureComponent<MainNavProps> {
    render() {
      const {
        drawerWidth,
      } = this.props;

      const MainNavStyles = {
        marginLeft: `${drawerWidth}px`,
        width: `calc(100% - ${drawerWidth}px)`
      }

        return (
          <div style={{flexGrow: 1}}>
            <AppBar position="fixed" style={MainNavStyles}>
              <Toolbar>
                {/*TODO: Make a side nav with different stuff appear when you click this*/}
                {/* <IconButton edge="start" color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton> */}
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