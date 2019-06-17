import * as React from 'react';
import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    TextField,
}                 from '@material-ui/core';
import AddCircle from '@material-ui/icons/AddCircle';
// Redux
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import {RootState, AllActions} from '../../../app';

// Common
import * as users from "../../../common/users";

interface SideBarProps {
    drawerWidth: number,
    users: users.types.UserEntity[],
}

class SideBar extends React.PureComponent<SideBarProps> {
    render() {
        const { drawerWidth } = this.props; 
        return (
            <Drawer
                variant="permanent"
                anchor="left"
                style={{width: `${drawerWidth}px`, flexShrink: 0}}
            >
                <div style={{width: drawerWidth}}>
                    <List>
                        <ListItem divider>
                            <ListItemText primary='Player List' primaryTypographyProps={{variant: 'subtitle1'}}/>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <TextField
                                id='sampletextfield'
                                label='Username'
                                margin='normal'
                                placeholder='EPIC Username'
                            />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <AddCircle color='secondary' />
                            </ListItemIcon>
                            <ListItemText primary='Add Player' />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        )
    }
}

const mapStateToProps = (state: RootState) => {
    const activeUsers = users.selectors.getUsersArray(state)
    console.log(activeUsers);
    return {
        users: activeUsers,
    };
  };
  
  const mapDispatchToProps = (dispatch: Dispatch<AllActions>) => {
    return {
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SideBar);
