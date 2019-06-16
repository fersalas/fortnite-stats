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
import * as books from "../../../common/books";

interface MainPanelProps {
    loadBookList(): void,
}

class MainPanel extends React.PureComponent<MainPanelProps> {

    componentDidMount() {
        const {
            loadBookList
        } = this.props;
        loadBookList();
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
    } = state.books;
  
    return {
        error: state.books.error || void 0,
        isLoading,
        list,
    };
  };
  
  const mapDispatchToProps = (dispatch: Dispatch<AllActions>) => {
    return {
        loadBookList: () => {
            dispatch(books.actions.loadBookList());
        },
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainPanel);
