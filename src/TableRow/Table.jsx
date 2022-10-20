import * as React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import './table.css'

export const BasicTable = ({ editableMode, data = [], children, setData }) => {
    if (!data) return null;

    const onRemoveCell = (removedId) => {
        setData({...data, data: data?.data.filter(el => el.id !== removedId)})
    }

    const updateDataFields = (updateEl) => {
        console.log(data, 'DATA')
        const newData = data?.data.map(element => element.id === updateEl.id ? updateEl : element);
        setData({...data, data: newData});
    }

    const alternativeComponent = () => {
        return <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: 0 }}>
                            Sorry, your table is empty.
                        </TableCell>
                        <TableCell style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            Please add new activity.
                        </TableCell>
                    </TableRow>
                    <TableRow>

                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    }
    return (
        <>
            {data?.data?.length ?
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 200, padding: 0 }} aria-label="simple table" className='table-wrapper' stickyHeader>
                        <TableHead>
                            <TableRow>
                                {editableMode ? <TableCell padding='none' align="center"></TableCell> : null}
                                <TableCell align="center">Task</TableCell>
                                <TableCell align="center">M</TableCell>
                                <TableCell align="center">T</TableCell>
                                <TableCell align="center">W</TableCell>
                                <TableCell align="center">T</TableCell>
                                <TableCell align="center">F</TableCell>
                                <TableCell align="center">S</TableCell>
                                <TableCell align="center">S</TableCell>

                            </TableRow>
                        </TableHead>
                        {children({onRemoveCell, updateDataFields})}
                    </Table>
                </TableContainer>

                : alternativeComponent()}
        </>
    );
}
