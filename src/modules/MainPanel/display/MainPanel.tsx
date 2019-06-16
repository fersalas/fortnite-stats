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
    loadUserStats(): void,
    uid?: string,
}

class MainPanel extends React.PureComponent<MainPanelProps> {

    componentDidMount() {
        const {
            loadUserStats
        } = this.props;
        loadUserStats();
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
    } = state.user;
  
    return {
        error: state.user.error || void 0,
        isLoading,
        uid,
    };
  };
  
  const mapDispatchToProps = (dispatch: Dispatch<AllActions>) => {
    return {
        loadUserStats: () => {
            dispatch(users.actions.loadUserStats());
        },
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainPanel);
