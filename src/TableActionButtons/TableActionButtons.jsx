import { useState } from "react";
import Button from '@mui/material/Button';
import { AddNewActivity } from "../AddNewActivity/AddNewActivity";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

export const TableActionButtons = ({editTableMode, setEditTableMode, addNewBlock, textFieldLabel}) => {
    const [blockFieldValue, setBlockFieldValue] = useState();
    
    const onAddClick = (item) => {
        addNewBlock(item);
    }
    return <div className="activity-block__activity-buttons">
        <AddNewActivity>
            {({ handleClose }) => {
                return (<Box className="activity-block">
                    <TextField
                        id="outlined-basic"
                        label={textFieldLabel}
                        variant="outlined"
                        className="activity-block__text-field"
                        onChange={(e) => setBlockFieldValue(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        className="activity-block__add-new"
                        onClick={() => {
                            handleClose();
                            onAddClick(blockFieldValue);
                        }}>
                        Add
                    </Button>
                </Box>)
            }
            }


        </AddNewActivity>
        <Fab
            color={!editTableMode ? "primary" : 'error'}
            aria-label="edit"
            onClick={() => setEditTableMode(!editTableMode)}
            className='activity-block__edit-button'
            size="small"
        >
            {!editTableMode ?
                <EditIcon fontSize="small" />
                : <CloseIcon fontSize='small' />
            }
        </Fab>

    </div>
}