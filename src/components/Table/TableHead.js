import * as React from 'react';
import { TableCell, TableHead, TableRow, Typography} from '@mui/material';

class TableHeader extends React.PureComponent {

    renderHeadColumns = () => {
        const { columns } = this.props;
        return <TableRow>
            {
                columns && columns.length > 0 && columns.map(column => (
                    <TableCell key={column.id} style={!!column.styles ? column.styles : {}}>
                        {
                            !!column.component ? 
                            column.component : 
                            <Typography>{column.label}</Typography>
                        }                
                    </TableCell>
                ))
            }
        </TableRow>
    }
    
    render() {
        return (<TableHead>
            {
                this.renderHeadColumns()
            }
        </TableHead>)
    }
}

export default TableHeader
