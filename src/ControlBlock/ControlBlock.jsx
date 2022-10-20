import { useContext, useState } from "react";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import EditIcon from '@mui/icons-material/Edit';
import { useGetData } from "../hooks/useGetData";
import { TableActionButtons } from "../TableActionButtons/TableActionButtons";
import { BasicTable } from "../TableRow/Table";

import './control-block.css';

import { calculateBlockControl } from "../utils/calculateBlockControl";
import { ControlContext } from "../contexts/ControlContext";

const quantity_days = 7;

export const ControlBlock = () => {
    const [editableMode, setEditTableMode] = useState();
    const { setValue } = useContext(ControlContext)
    const {
        controlData,
        setControlData,
        addNewControlBlock
    } = useGetData();

    if (!controlData) return null;


    const calculateEffective = calculateBlockControl(controlData?.data, controlData?.maxHours, quantity_days);
    setValue(calculateEffective);

    const onBlurMaxHours = value => {
        setControlData({ ...controlData, maxHours: value ? value : 0 })
    }

    return (
        <>
            <TableActionButtons
                editTableMode={editableMode}
                setEditTableMode={setEditTableMode}
                addNewBlock={addNewControlBlock}
                textFieldLabel="Add new aim"
            />
            <BasicTable editableMode={editableMode} data={controlData} setData={setControlData}>
                {({ onRemoveCell, updateDataFields }) => controlData?.data && controlData.data.length ? <TableBody>
                    {controlData?.data.map((row) => (
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
                                <input
                                    type="time"
                                    id="appt"
                                    name="appt"
                                    min="00:00"
                                    max="23:59"
                                    defaultValue={row.mon}
                                    onBlur={(e) => updateDataFields({ ...row, mon: e.target.value })}
                                    required
                                />
                            </TableCell>
                            <TableCell align="center">
                                <input
                                    type="time"
                                    id="appt"
                                    name="appt"
                                    min="09:00"
                                    max="18:00"
                                    defaultValue={row.tue}
                                    onBlur={(e) => updateDataFields({ ...row, tue: e.target.value })}

                                    required
                                />
                            </TableCell>
                            <TableCell align="center">
                                <input
                                    type="time"
                                    id="appt"
                                    name="appt"
                                    min="09:00"
                                    max="18:00"
                                    defaultValue={row.wed}
                                    onBlur={(e) => updateDataFields({ ...row, wed: e.target.value })}
                                    required
                                />
                            </TableCell>
                            <TableCell align="center">
                                <input
                                    type="time"
                                    id="appt"
                                    name="appt"
                                    min="09:00"
                                    max="18:00"
                                    defaultValue={row.thu}
                                    onBlur={(e) => updateDataFields({ ...row, thu: e.target.value })}
                                    required
                                />
                            </TableCell>
                            <TableCell align="center">
                                <input
                                    type="time"
                                    id="appt"
                                    name="appt"
                                    min="09:00"
                                    max="18:00"
                                    defaultValue={row.fri}
                                    onBlur={(e) => updateDataFields({ ...row, fri: e.target.value })}
                                    required
                                />
                            </TableCell>
                            <TableCell align="center">
                                <input
                                    type="time"
                                    id="appt"
                                    name="appt"
                                    min="09:00"
                                    max="18:00"
                                    defaultValue={row.sat}
                                    onBlur={(e) => updateDataFields({ ...row, sat: e.target.value })}
                                    required
                                />
                            </TableCell>
                            <TableCell align="center">
                                <input
                                    type="time"
                                    id="appt"
                                    name="appt"
                                    min="09:00"
                                    max="18:00"
                                    defaultValue={row.sun}
                                    onBlur={(e) => updateDataFields({ ...row, sun: e.target.value })}
                                    required
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody> : null
                }
            </BasicTable>

            {controlData?.data && controlData?.data.length ? <TableBody>
                <TableRow >
                    <TableCell align="left" colSpan={2}>Days</TableCell>
                    <TableCell align="right" colSpan={2}>{quantity_days}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell align="left" colSpan={1} >Max hours</TableCell>
                    <TableCell align="left" colSpan={1}></TableCell>

                    <TableCell align="right" colSpan={1} style={{ display: 'flex', flexDirection: 'unset' }}>
                        <input
                            type="text"
                            id="maxHours"
                            onBlur={(e) => onBlurMaxHours(e.target.value)}
                            required
                            size='6'
                            style={{ textAlign: 'center' }}
                            defaultValue={controlData.maxHours}
                        />
                        <EditIcon fontSize="small" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell align="left" colSpan={2}>Result</TableCell>

                    <TableCell align="right" colSpan={2} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} color='green'>
                        {calculateEffective > -35 && <ArrowDownwardIcon color='success' />}
                        {calculateEffective <= -35 && calculateEffective > -65 && <><ArrowDownwardIcon color='warning' /><ArrowUpwardIcon color='warning' /></>}
                        {calculateEffective <= -65 && <ArrowUpwardIcon color='error' />}
                        {calculateEffective}%

                    </TableCell>
                </TableRow>
            </TableBody> : null}
        </>
    )
}