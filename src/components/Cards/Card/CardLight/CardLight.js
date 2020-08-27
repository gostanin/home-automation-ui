import React, { useState } from 'react';

import { Switch } from '@material-ui/core/';
import axios from '../../../../axios-base';

import lightsOn from '../../../../assets/colorbulb.png';
import lightsOff from '../../../../assets/bwbulb.png';
import Card from '../CardBase/CardBase';

const CardLights = (props) => {
    const [status, setStatus] = useState(!!props.status);

    const statusChangeHandler = () => {
        let url = '';
        if (status) { url = `/lights/${props.id}/off`; }
        else { url = `/lights/${props.id}/on`; }
        axios.put(url)
            .then(() => setStatus(!status))
            .catch(error => console.log(error));
    }

    const deleteCard = () => {
        axios.delete(`/lights/${props.id}`)
            .then(() => props.deleteHandler("Light"))
            .catch(error => console.log(error));
    }

    return (
        <Card ImagePath={status ? lightsOn : lightsOff} name={props.name} deleteHandler={deleteCard}>
            <Switch color="primary" checked={status} onChange={statusChangeHandler} />
        </Card>
    );
}

export default CardLights;