import React from 'react'
import Fab from '@material-ui/core/Fab';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import {NavLink} from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button_edit: {
            marginTop: '10px', 
            zIndex: 1
        }
    }),
);

const SelectView = () => {
    const classes = useStyles();

    return (
        <div className='position_buttons_select'>
            <NavLink to='/'>
                <Fab color="primary" className={classes.button_edit} aria-label="add">
                    <CalendarMonthIcon />
                </Fab>
            </NavLink>

            <NavLink to='/viewTable'>
                <Fab color="primary" className={classes.button_edit} aria-label="add">
                    <ViewModuleIcon />
                </Fab>
            </NavLink>
        </div>
    )
}

export default SelectView