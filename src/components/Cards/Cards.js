import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';

import styles from './Cards.module.css';
import CardLight from './Card/CardLight/CardLight';
import CardThermo from './Card/CardThermo/CardThermo';
import CardAdd from './Card/CardAdd/CardAdd';

const Cards = (props) => {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        const updatedLights = props.lights.map(light => ({ ...light, type: 'Light' }));
        const updatedThermo = props.thermo.map(thermo => ({ ...thermo, type: 'Thermo' }));
        const updatedDevices = [...updatedLights, ...updatedThermo].sort((a, b) => Date.parse(a.creation_date) - Date.parse(b.creation_date));
        setDevices(updatedDevices);
    }, [props]);

    console.log('rendering');

    const cards = devices.map(device => {
        return (
            device.type === 'Light'
                ? <CardLight key={device.creation_date} id={device.id} name={device.name} status={device.status} deleteHandler={props.deleteHandler} />
                : <CardThermo key={device.creation_date} id={device.id} name={device.name} temp={device.temp} deleteHandler={props.deleteHandler} />
        );
    })

    return (
        <Grid className={styles.Cards}
            container>
            <CardAdd onClick={props.onOpen} />
            {cards}
        </Grid>
    );
}

export default Cards;