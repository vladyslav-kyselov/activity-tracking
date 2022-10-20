import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const TabsContainer = ({ setTabName, tabName }) => {
    const [value, setValue] = useState(tabName);

    const handleChange = (event, newValue) => {
        setTabName(newValue);
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab value="activity" label="Activity Tab" />
                <Tab value="report" label="Report Tab" />
            </Tabs>
        </Box>
    );
}
