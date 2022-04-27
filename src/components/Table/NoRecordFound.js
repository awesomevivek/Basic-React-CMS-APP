import * as React from 'react';
import {TableBody, TableRow, TableCell, Typography} from '@mui/material'

const NoRecordFound = ({colSpan}) => {
    
    return (<TableBody>
        <TableRow 
        style={{
            height: 300, 
            justifyContent: 'center', 
            alignItems: 'center', 
            alignContents: 'center'
        }}>
            <TableCell colSpan={colSpan} style={{textAlign: 'center'}}>
                <Typography>No Record Found</Typography>
            </TableCell>
        </TableRow>
    </TableBody>)
}

export default NoRecordFound;