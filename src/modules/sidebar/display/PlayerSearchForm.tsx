import * as React from 'react';
import {
    Button,
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
                        <Button
                            aria-label='Search'
                            color='default'
                            fullWidth
                            size='small'
                            type='submit'
                            variant='contained'
                        >
                            <SearchIcon />
                            {'Search Player'}
                        </Button>
                    </FormControl>
                </form>
            </ListItem>
        )
    }
}

export default PlayerSearchForm;
