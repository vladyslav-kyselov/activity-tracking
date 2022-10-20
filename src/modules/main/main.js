import React, { useState } from 'react';
import { ResponsiveAppBar } from '../../AppBar/ResponsiveAppBar';
import { ActivityContext } from '../../contexts/ActivityContext';
import { AimContext } from '../../contexts/AimContext';
import { ControlContext } from '../../contexts/ControlContext';

import { Dashboard } from "../../Dashboard/Dashboard"
import { TabsContainer } from '../../TabsContainer/TabsContainer';
import { WeekReport } from '../../WeekReport/WeekReport';

const TAB_NAME = {
    activity: 'activity',
    report: 'report',
}

export const Main = ({ user }) => {
    const [activityContextValue, setActivityContextValue] = useState();
    const [aimContextValue, setAimContextValue] = useState();
    const [controlContextValue, setControlContextValue] = useState();
    const [tabName, setTabName] = useState(TAB_NAME.activity);


    return (
        <>
            <ActivityContext.Provider value={{ activityValue: activityContextValue, setValue: setActivityContextValue }}>
                <AimContext.Provider value={{ aimValue: aimContextValue, setValue: setAimContextValue }}>
                    <ControlContext.Provider value={{ controlValue: controlContextValue, setValue: setControlContextValue }}>

                        <ResponsiveAppBar user={user} />

                        <TabsContainer setTabName={setTabName} tabName={TAB_NAME.activity} />
                        {tabName === TAB_NAME.activity ? <Dashboard /> : null}
                        {tabName === TAB_NAME.report ? <WeekReport /> : null}
                    </ControlContext.Provider>
                </AimContext.Provider>
            </ActivityContext.Provider>

        </>
    )
}