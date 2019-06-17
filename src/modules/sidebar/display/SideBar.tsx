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
import * as players from "../../../common/players";

interface SideBarProps {
    drawerWidth: number,
    players: players.types.PlayerEntity[],
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
                                label='Playername'
                                margin='normal'
                                placeholder='EPIC Playername'
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
    const activePlayers = players.selectors.getPlayersArray(state)
    console.log(activePlayers);
    return {
        players: activePlayers,
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
