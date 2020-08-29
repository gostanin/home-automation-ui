import React, { useState, useEffect } from 'react';

import { Select, MenuItem } from '@material-ui/core/';
import axios from '../../../../axios-base';

import styles from './CardThermo.module.css';
import tempHot from '../../../../assets/temphot.png';
import tempCold from '../../../../assets/tempcold.png'; import Card from '../CardBase/CardBase';

const CardThermo = (props) => {
    const [isHot, setIsHot] = useState(false);
    const [temp, setTemp] = useState(props.temp);

    useEffect(() => {
        setIsHot(testTemp(props.temp));
    }, [props.temp])

    const testTemp = (temp) => {
        if (temp > 0) {
            return true;
        }
        else {
            return false;
        }
    }

    const tempChangeHandler = (event) => {
        const updatedTemp = event.target.value;
        setIsHot(testTemp(updatedTemp));
        setTemp(updatedTemp);
        updateTemp(updatedTemp);
    }

    const updateTemp = (temp) => {
        axios.put(`/thermostats/${props.id}/temp`, { temp: temp })
            .catch(error => console.log(error));
    }

    const deleteCard = () => {
        axios.delete(`/thermostats/${props.id}`)
            .then(() => props.deleteHandler('Thermo'))
            .catch(error => console.log(error));
    }

    const menuItems = [...Array(301).keys()].map(number => <MenuItem key={number} value={number - 20}>{number - 20}</MenuItem>)

    return (
        <Card ImagePath={isHot ? tempHot : tempCold} name={props.name} deleteHandler={deleteCard}>
            <Select
                value={temp}
                onChange={tempChangeHandler}
                className={styles.root}>
                {menuItems}
            </Select>
        </Card>
    );
}

export default CardThermo;