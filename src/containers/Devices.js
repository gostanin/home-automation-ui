import React, { useState, useEffect } from 'react';

import axios from '../axios-base';

import Cards from '../components/Cards/Cards';
import Modal from '../components/Modal/Modal';

const Devices = (props) => {
    const [lights, setLights] = useState([]);
    const [thermo, setThermo] = useState([]);
    const [modalState, setModalState] = useState(false);

    const modalCloseHandler = () => {
        setModalState(false);
    }

    const modalOpenHandler = () => {
        setModalState(true);
    }

    const deleteHandler = (type) => {
        type === "Light" ? fetchLights() : fetchThermo();
    }

    const modalSubmitHandler = (type, data) => {
        console.log(data.type);
        const url = type === "Light" ? "/lights" : "/thermostats";
        console.log(data);
        axios.post(url, data).then(() => type === "Light" ? fetchLights() : fetchThermo())
            .then(() => modalCloseHandler())
            .catch(error => console.log(error));

    }

    useEffect(() => {
        fetchLights();
        fetchThermo();
    }, []);

    const fetchLights = () => {
        axios.get('/lights')
            .then(response => {
                setLights(response.data);
            })
            .catch(error => console.log(error));
    }

    const fetchThermo = () => {
        axios.get('/thermostats')
            .then(response => {
                setThermo(response.data);
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <Modal open={modalState} onClose={modalCloseHandler} submitData={modalSubmitHandler} />
            <Cards lights={lights} thermo={thermo} onOpen={modalOpenHandler} deleteHandler={deleteHandler} />
        </div>
    );
}

export default Devices;