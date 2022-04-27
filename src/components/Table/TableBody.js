import * as React from 'react';
import { TableCell, TableBody, TableRow} from '@mui/material';

class TBody extends React.PureComponent {

    renderRows = () => {
        const { rowData, columns } = this.props;
        return (<>
            {
                !!rowData && rowData.length > 0 && rowData.map((row, index) => (
                    <TableRow key={'row_' + index}>
                        {
                            columns && columns.length > 0 && columns.map((column, index) => (
                                <TableCell key={'col_' + index}>
                                    {
                                    row[column.id] || 
                                    <div style={{ height: 1 }}>
                                        <div style={{ minWidth: 50 }} />
                                    </div>
                                    }            
                                </TableCell>
                            ))
                        }
                    </TableRow>
                )) 
            }
    </>)}
    
    render() {
        return (<TableBody>
            {
                this.renderRows()
            }
        </TableBody>)
    }
}

export default TBody
