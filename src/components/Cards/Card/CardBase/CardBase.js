import React from 'react';

import styles from './CardBase.module.css';
import { Card } from '@material-ui/core/';

const cardBase = (props) => {
    return (
        <Card className={styles.Card} elevation={3}>
            <img src={props.ImagePath} alt="IoT device" />
            {props.children}
        </Card>
    );
}

export default cardBase;