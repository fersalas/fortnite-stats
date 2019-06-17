import * as React from "react";
import {
    Typography
}                               from '@material-ui/core';

// Redux
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import {RootState, AllActions} from '../../../app';

// Common
import * as players from "../../../common/players";

interface StatCardsContainerProps {
    loadPlayerStats(username: string): void,
    uid?: string,
}

class StatCardsContainer extends React.PureComponent<StatCardsContainerProps> {

    componentDidMount() {
        const {
            loadPlayerStats
        } = this.props;
        loadPlayerStats('NotReykan');
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
    } = state.players;
  
    return {
        error: state.players.error || void 0,
        isLoading,
        uid,
    };
  };
  
  const mapDispatchToProps = (dispatch: Dispatch<AllActions>) => {
    return {
        loadPlayerStats: (username: string) => {
            dispatch(players.actions.loadPlayerStats(username));
        },
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(StatCardsContainer);
