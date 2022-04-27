import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const Divider = styled(Box, {})(() => ({
    flex: '1 1 auto'
}))

const FlexDivider = () => {
    return (<Divider />)
}

export default FlexDivider;

