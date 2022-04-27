import * as React from 'react';
import TableToolbars from "./TableToolbar";
import TableHeader from './TableHead';
import TBody from './TableBody';
import {Table} from '@mui/material';
import NoRecordFound from './NoRecordFound';

class Tables extends React.PureComponent {
    
    render() {
        const {
            columns, 
            rowData, 
            leftAction, 
            rightAction, 
            hideToolbar, 
            hideHeader
        } = this.props;

        console.log("rowdata", rowData);

        return (<>
        {
            !hideToolbar && 
            <TableToolbars leftAction={leftAction} rightAction={rightAction} />
        }
        <Table>
            {
                !hideHeader && 
                <TableHeader columns={columns} />
            }
            {
                !!rowData && rowData.length > 0 ? 
                <TBody rowData={rowData} columns={columns} /> : 
                <NoRecordFound colSpan={!!columns ? columns.length : 1} />
            }         
            
        </Table>
        </>)
    }
}

export default Tables
