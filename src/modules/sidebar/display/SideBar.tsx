import * as React from 'react';
import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
}                 from '@material-ui/core';
import AddCircle from '@material-ui/icons/AddCircle';
import PlayerSearchForm from './PlayerSearchForm';

// Redux
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import {RootState, AllActions} from '../../../app';

// Common
import * as players from "../../../common/players";

interface SideBarProps {
    addPlayer(username: string): void,
    drawerWidth: number,
    players: players.types.PlayerEntity[],
}

interface SideBarState {
    playerSearch: string,
}

class SideBar extends React.PureComponent<SideBarProps, SideBarState> {

    state = {
        playerSearch: '',
    }

    handlePlayerSearchChange = (e: any) => {
        const username = e.target.value;
        this.setState({
            ...this.state,
            playerSearch: username
        });
    }

    handlePlayerSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const {
            addPlayer
        } = this.props;
        const {
            playerSearch
        } = this.state;

        e.preventDefault();
        addPlayer(playerSearch);
    }

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
                        <PlayerSearchForm
                            onSubmit={this.handlePlayerSearchSubmit}
                            onTextFieldChange={this.handlePlayerSearchChange}
                        />
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
    return {
        players: activePlayers,
    };
  };
  
  const mapDispatchToProps = (dispatch: Dispatch<AllActions>) => {
    return {
        addPlayer: (username: string) => {
            dispatch(players.actions.loadPlayerStats(username));
        },
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SideBar);
