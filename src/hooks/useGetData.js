import { useEffect, useState } from "react"


const getData = () => ({
    email: {
        activity: {
            data: [{
                id: 1,
                taskName: 'sleep',
                mon: true,
                tue: false,
                wed: false,
                thu: false,
                fri: false,
                sat: false,
                sun: true,
            }, {
                id: 2,
                taskName: 'discuss',
                mon: true,
                tue: false,
                wed: false,
                thu: false,
                fri: false,
                sat: false,
                sun: true,
            }, {
                id: 3,
                taskName: 'read',
                mon: true,
                tue: false,
                wed: false,
                thu: false,
                fri: false,
                sat: false,
                sun: true,
            }]
        },
        aim: {
            data: [{
                taskName: 'sleep',
                id: 1,
                mon: '11:30',
                tue: '03:30',
                wed: '04:20',
                thu: '01:10',
                fri: '00:30',
                sat: '00:20',
                sun: '00:00',
            }, {
                id: 2,
                taskName: 'discuss',
                mon: '11:30',
                tue: '03:30',
                wed: '04:20',
                thu: '01:10',
                fri: '00:30',
                sat: '00:20',
                sun: '00:00',
            }],
            maxHours: 5
        },

        control: {
            data: [{
                taskName: 'phone',
                id: 1,
                mon: '11:30',
                tue: '03:30',
                wed: '04:20',
                thu: '01:10',
                fri: '00:30',
                sat: '00:20',
                sun: '00:00',
            }],
            maxHours: 2
        }
    },


});

const createNewActiviliBlock = (newId, taskName) => {
    return {
        id: newId,
        taskName,
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false,
        sun: false
    }
};

const createNewAimBlock = (newId, taskName) => {
    return {
        id: newId,
        taskName,
        mon: '00:00',
        tue: '00:00',
        wed: '00:00',
        thu: '00:00',
        fri: '00:00',
        sat: '00:00',
        sun: '00:00',
    }
}

const createNewControlBlock = (newId, taskName) => createNewAimBlock(newId, taskName)

const addNewElement = (taskName, data, setData, createNewBlock) => {
    const array = data.data;
    const newId = array.length ? array[array.length - 1]?.id + 1 : 1;
    setData({...data, data: [...array, createNewBlock(newId, taskName)]})
}

export const useGetData = () => {
    const [activityData, setActivityData] = useState();
    const [aimData, setAimData] = useState();
    const [controlData, setControlData] = useState();

    useEffect(() => {

        const data = getData();

        setActivityData(data.email.activity);
        setAimData(data.email.aim);
        setControlData(data.email.control);
    }, [])

    const addNewActivityBlock = (taskName) => addNewElement(taskName, activityData, setActivityData, createNewActiviliBlock);
    const addNewAimBlock = taskName => addNewElement(taskName, aimData, setAimData, createNewAimBlock);
    const addNewControlBlock = taskName => addNewElement(taskName, controlData, setControlData, createNewControlBlock);

    return {
        activityData,
        setActivityData,
        addNewActivityBlock,

        aimData,
        setAimData,
        addNewAimBlock,

        controlData,
        setControlData,
        addNewControlBlock,
    }
}