import React, { PureComponent } from 'react'
import {
    Paper,
    Typography
}                               from '@material-ui/core/';

class MainPanel extends PureComponent {
    render() {
        return (
            <div>
                <Paper style={{padding: '20px'}}>
                    <Typography component="h2">
                        {'Hello World!'}
                    </Typography>                    
                </Paper>
            </div>
        )
    }
}

export default MainPanel;
