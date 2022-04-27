import * as React from 'react';
import {Toolbar} from '@mui/material';
import FlexDivider from '../FlexDivider';

class TableToolbars extends React.PureComponent {
    
    render() {
        const {leftAction, rightAction} = this.props;
        return (<Toolbar>
            {
                !!leftAction && 
                leftAction
            }
            <FlexDivider />
            {
                !!rightAction &&
                rightAction
            }
        </Toolbar>)
    }
}

export default TableToolbars

