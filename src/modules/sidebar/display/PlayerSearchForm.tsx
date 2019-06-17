import * as React from 'react';
import {
    Fab,
    FormControl,
    ListItem,
    TextField,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'

interface PlayerSearchFormProps {
    onSubmit(e: React.FormEvent<HTMLFormElement>): void,
    onTextFieldChange(e: React.SyntheticEvent): void,
}

class PlayerSearchForm extends React.PureComponent <PlayerSearchFormProps> {
    render() {
        const {
            onSubmit,
            onTextFieldChange,
        } = this.props;

        return (
            <ListItem>
                <form onSubmit={onSubmit}>
                    <FormControl fullWidth>
                        <TextField
                            id='PlayerSearchForm'
                            label='EPIC Username'
                            onChange={onTextFieldChange}
                            margin='normal'
                            style={{marginBottom: '15px'}}
                        />
                        <Fab aria-label='Search' color='default' variant='extended' size='small'>
                            <SearchIcon />
                            {'Search Player'}
                        </Fab>
                    </FormControl>
                </form>
            </ListItem>
        )
    }
}

export default PlayerSearchForm;
