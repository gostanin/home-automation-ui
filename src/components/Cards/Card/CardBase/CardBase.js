import React from 'react';

import { Paper, IconButton } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';

import styles from './CardBase.module.css';

const cardBase = (props) => {
    return (
        <Paper className={styles.Card} elevation={3}>
            <div className={styles.header}>
                <span className={styles.nameHeader}>{props.name}</span>
                <IconButton onClick={props.deleteHandler}><DeleteIcon /></IconButton>
            </div>
            <img src={props.ImagePath} alt="IoT device" />
            {props.children}
        </Paper>
    );
}

export default cardBase;