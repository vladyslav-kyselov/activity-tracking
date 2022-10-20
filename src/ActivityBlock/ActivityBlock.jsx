import { useContext, useState } from "react"
import { BasicTable } from "../TableRow/Table"
import { useGetData } from "../hooks/useGetData";
import { TableActionButtons } from "../TableActionButtons/TableActionButtons";
import Checkbox from '@mui/material/Checkbox';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import './activityBlock.css';
import { calculateBlockActivity } from "../utils/calculateBlockActivity";
import { ActivityContext } from "../contexts/ActivityContext";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const quantity_days = 7;

export const ActivityBlock = () => {
    const [editableMode, setEditTableMode] = useState(false);
    const { setValue } = useContext(ActivityContext)
    const {
        activityData,
        setActivityData,
        addNewActivityBlock,
    } = useGetData();
    if (!activityData) return null;



    console.log(activityData, 'ACTIVITY DATA')
    const calculateEffective = calculateBlockActivity(activityData?.data, quantity_days);

    setValue(calculateEffective);
    return <>
        <TableActionButtons
            editTableMode={editableMode}
            setEditTableMode={setEditTableMode}
            addNewBlock={addNewActivityBlock}
            textFieldLabel="Add new activity"
        />
        <>
            <BasicTable editableMode={editableMode} data={activityData} setData={setActivityData}>
                {({ onRemoveCell, updateDataFields }) => activityData?.data && activityData.data.length ? <TableBody>
                    {activityData?.data.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {editableMode ?
                                <TableCell padding='none' cursor='pointer' align='center' width={30} style={{ cursor: 'pointer', color: 'red' }} onClick={() => onRemoveCell(row.id)}>X</TableCell>
                                : null
                            }
                            <TableCell
                                contentEditable={true}
                                onBlur={(e) => updateDataFields({ ...row, taskName: e.target.textContent })}
                                align="center"
                                className='table-activity__task-name'
                            >
                                {row.taskName}
                            </TableCell>
                            <TableCell align="center">
                                <Checkbox {...label} checked={row.mon} onClick={() => updateDataFields({ ...row, mon: !row.mon })} />
                            </TableCell>
                            <TableCell align="center">
                                <Checkbox {...label} checked={row.tue} onClick={() => updateDataFields({ ...row, tue: !row.tue })} />
                            </TableCell>
                            <TableCell align="center">
                                <Checkbox {...label} checked={row.wed} onClick={() => updateDataFields({ ...row, wed: !row.wed })} />
                            </TableCell>
                            <TableCell align="center">
                                <Checkbox {...label} checked={row.thu} onClick={() => updateDataFields({ ...row, thu: !row.thu })} />
                            </TableCell>
                            <TableCell align="center">
                                <Checkbox {...label} checked={row.fri} onClick={() => updateDataFields({ ...row, fri: !row.fri })} />
                            </TableCell>
                            <TableCell align="center">
                                <Checkbox {...label} checked={row.sat} onClick={() => updateDataFields({ ...row, sat: !row.sat })} />
                            </TableCell>
                            <TableCell align="center">
                                <Checkbox {...label} checked={row.sun} onClick={() => updateDataFields({ ...row, sun: !row.sun })} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody> : null}
            </BasicTable>
            {activityData?.data && activityData?.data.length ? <TableBody>
                <TableRow >
                    <TableCell align="left" colSpan={3}>Items</TableCell>
                    <TableCell align="right" colSpan={3}>{activityData?.data.length}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell align="left" colSpan={2} >Days</TableCell>
                    <TableCell align="right" colSpan={4}>
                        {quantity_days}
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell align="left" colSpan={2}>Result</TableCell>
                    <TableCell align="left" colSpan={2}></TableCell>

                    <TableCell align="right" colSpan={2} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} color='green'>
                        {calculateEffective < 35 && <ArrowDownwardIcon color='error' />}
                        {calculateEffective >= 35 && calculateEffective < 65 && <><ArrowDownwardIcon color='warning' /><ArrowUpwardIcon color='warning' /></>}
                        {calculateEffective >= 65 && <ArrowUpwardIcon color='success' />}
                        {calculateEffective}%

                    </TableCell>
                </TableRow>
            </TableBody> : null}
        </>
    </>
}

