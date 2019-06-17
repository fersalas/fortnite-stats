import * as React from "react";
import {
    Typography
}                               from '@material-ui/core';

// Redux
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import {RootState, AllActions} from '../../../app';

// Common
import * as users from "../../../common/users";

interface StatCardsContainerProps {
    loadUserStats(username: string): void,
    uid?: string,
}

class StatCardsContainer extends React.PureComponent<StatCardsContainerProps> {

    componentDidMount() {
        const {
            loadUserStats
        } = this.props;
        loadUserStats('NotReykan');
    }
    render() {
        return (
            <section>
                <Typography component="h2">
                    {'Hello World!'}
                </Typography>                    
            </section>
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
  )(StatCardsContainer);
