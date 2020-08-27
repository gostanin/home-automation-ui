import React, { useState } from 'react';

import {
    Modal, FormControl, FormControlLabel, Button, MenuItem,
    Select, FormHelperText, TextField, FormLabel, RadioGroup, Radio
} from '@material-ui/core';

import styles from './Modal.module.css';

const ModalCustom = (props) => {
    const [type, setType] = useState("Light");
    const [ligthStatus, setLigthStatus] = useState(false);
    const [temp, setTemp] = useState(0);
    const [name, setName] = useState("");

    const radioChangeTypeHandler = (event) => {
        setType(event.target.value);
    }

    const selectChangeLightStatus = (event) => {
        const status = event.target.value === 'On' ? true : false;
        setLigthStatus(status);
    }

    const selectChangeThermoStatus = (event) => {
        setTemp(event.target.value);
    }

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const onSumbitHandler = (event) => {
        event.preventDefault();
        let data = { name: name }
        if (type === "Light") {
            data = {
                ...data,
                status: ligthStatus
            }
        }
        else {
            data = {
                ...data,
                temp: temp
            }
        }
        props.submitData(type, data);
    }

    let menuItems;
    let select;
    if (type === 'Light') {
        menuItems = ['On', 'Off'].map(value => <MenuItem key={value} value={value}>{value}</MenuItem>)
        select = (
            <React.Fragment>
                <FormHelperText>Light status</FormHelperText>
                <Select
                    value={ligthStatus ? 'On' : 'Off'}
                    onChange={selectChangeLightStatus}
                    className={styles.root}>
                    {menuItems}
                </Select>
            </React.Fragment >
        );
    }
    else {
        menuItems = [...Array(301).keys()].map(number => <MenuItem key={number} value={number - 20}>{number - 20}</MenuItem>)
        select = (
            <React.Fragment>
                <FormHelperText>Thermostat temperature</FormHelperText>
                <Select
                    value={temp}
                    onChange={selectChangeThermoStatus}
                    className={styles.root}>
                    {menuItems}
                </Select>
            </React.Fragment>
        );
    }

    return (
        <Modal
            disablePortal
            disableEnforceFocus
            disableAutoFocus
            open={props.open}
            onClose={props.onClose}
            className={styles.Modal}>
            <div className={styles.paper}>
                <form onSubmit={onSumbitHandler}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Add new device</FormLabel>
                        <FormHelperText>Device name</FormHelperText>
                        <TextField required onChange={nameChangeHandler} value={name} />
                        <RadioGroup value={type} onChange={radioChangeTypeHandler} className={styles.radioGroup}>
                            <FormControlLabel value="Light" control={<Radio color="primary" />} label="Light" />
                            <FormControlLabel value="Thermostat" control={<Radio color="primary" />} label="Thermostat" />
                        </RadioGroup>
                        {select}
                        <Button type="submit" variant="contained" color="primary">
                            Add
                        </Button>
                    </FormControl>
                </form>
            </div>
        </Modal>
    );
}

export default ModalCustom;