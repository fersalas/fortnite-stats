import * as React from "react";
import {
    Paper,
    Typography
}                               from '@material-ui/core';

class MainPanel extends React.PureComponent {
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

export default MainPanel;
