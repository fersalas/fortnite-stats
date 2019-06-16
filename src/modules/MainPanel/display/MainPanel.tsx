import * as React from "react";
import {
    Paper,
    Typography
}                               from '@material-ui/core';

// Redux
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import {RootState, AllActions} from '../../../app';

// Common
import * as users from "../../../common/users";

interface MainPanelProps {
    loadUserStats(username: string): void,
    uid?: string,
}

class MainPanel extends React.PureComponent<MainPanelProps> {

    componentDidMount() {
        const {
            loadUserStats
        } = this.props;
        loadUserStats('NotReykan');
    }
    render() {
        return (
            <Paper style={{padding: '20px'}}>
                <Typography component="h2">
                    {'Hello World!'}
                </Typography>                    
            </Paper>
        )
    }
}

const mapStateToProps = (state: RootState) => {
    const {
        isLoading,
        uid,
    } = state.users;
  
    return {
        error: state.users.error || void 0,
        isLoading,
        uid,
    };
  };
  
  const mapDispatchToProps = (dispatch: Dispatch<AllActions>) => {
    return {
        loadUserStats: (username: string) => {
            dispatch(users.actions.loadUserStats(username));
        },
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainPanel);
