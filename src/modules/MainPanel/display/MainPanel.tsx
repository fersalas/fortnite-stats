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
    loadUserUid(): void,
}

class MainPanel extends React.PureComponent<MainPanelProps> {

    componentDidMount() {
        const {
            loadUserUid
        } = this.props;
        loadUserUid();
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
        list,
    } = state.users;
  
    return {
        error: state.users.error || void 0,
        isLoading,
        list,
    };
  };
  
  const mapDispatchToProps = (dispatch: Dispatch<AllActions>) => {
    return {
        loadUserUid: () => {
            dispatch(users.actions.loadUserUid());
        },
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainPanel);
