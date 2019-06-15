import React, { PureComponent } from 'react'
import {
    Paper
}                               from '@material-ui/core/';

class MainPanel extends PureComponent {
    render() {
        return (
            <div>
                <Paper>
                    {'Hello World!'}
                </Paper>
            </div>
        )
    }
}

export default MainPanel;
