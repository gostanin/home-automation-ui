import React from 'react';

import styles from './Cards.module.css';
import CardLight from './Card/CardLight/CardLight';
import CardThermo from './Card/CardThermo/CardThermo';
import Grid from '@material-ui/core/Grid';

const cards = (props) => {
    return (
        <Grid className={styles.Cards}
            container>
            <CardLight/>
            <CardThermo/>
            <CardThermo/>
            <CardThermo/>
            <CardLight/>
            <CardLight/>
            <CardLight/>
            <CardLight/>
            <CardThermo/>
            <CardThermo/>
        </Grid>
    );
}

export default cards;