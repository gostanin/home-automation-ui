import React from 'react';

import { Paper } from '@material-ui/core/';

import styles from './CardAdd.module.css';
import AddIcon from '../../../../assets/add.png';

const cardAdd = (props) => {
    return (
        <Paper className={styles.Card} elevation={3} onClick={props.onClick}>
            <img className={styles.image}src={AddIcon} alt="Add new device" />
        </Paper>
    );
}

export default cardAdd;