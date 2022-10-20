import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import './divider.css'
import { ActivityContext } from '../contexts/ActivityContext';
import { AimContext } from '../contexts/AimContext';
import { useContext } from 'react';
import { ControlContext } from '../contexts/ControlContext';

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
        marginTop: theme.spacing(2),
    },
}));

export const DividerText = () => {

    const { activityValue } = useContext(ActivityContext);
    const { aimValue } = useContext(AimContext);
    const { controlValue } = useContext(ControlContext);

    const calculateEffective = (((+activityValue) + (+aimValue) + (+controlValue)) / 2).toFixed(2);
    return (
        <Root>
            <div className='divider-text-wrapper'>
                Result: {calculateEffective}%
                {calculateEffective > -35 && <ArrowDownwardIcon color='success' />}
                {calculateEffective <= -35 && calculateEffective > -65 && <><ArrowDownwardIcon color='warning' /><ArrowUpwardIcon color='warning' /></>}
                {calculateEffective <= -65 && <ArrowUpwardIcon color='error' />}
            </div>

            <Divider>TOTAL</Divider>
        </Root>
    );
}
