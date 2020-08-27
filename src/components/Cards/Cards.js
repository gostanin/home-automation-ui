import React from 'react';

import Grid from '@material-ui/core/Grid';

import styles from './Cards.module.css';
import CardLight from './Card/CardLight/CardLight';
import CardThermo from './Card/CardThermo/CardThermo';
import CardAdd from './Card/CardAdd/CardAdd';

const Cards = (props) => {
    const lights = props.lights.map(light => {
        return <CardLight key={light.id} id={light.id} name={light.name} status={light.status} deleteHandler={props.deleteHandler} />
    })

    const thermo = props.thermo.map(thermo => {
        return <CardThermo key={thermo.id} id={thermo.id} name={thermo.name} temp={thermo.temp} deleteHandler={props.deleteHandler} />
    })

    return (
        <Grid className={styles.Cards}
            container>
            <CardAdd onClick={props.onOpen} />
            {lights}
            {thermo}
        </Grid>
    );
}

export default Cards;