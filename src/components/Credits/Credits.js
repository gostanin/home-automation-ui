import React, { useState } from 'react';

import { Modal, Button } from '@material-ui/core';

import styles from './Credits.module.css';

const Credits = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            <div className={styles.credits}><Button color="primary" onClick={() => setOpen(true)}>Credits</Button></div>
            <Modal open={open} onClose={() => setOpen(false)} className={styles.modal}>
                <div className={styles.paper}>
                    <h4>Imagies provided by <a href="https://www.flaticon.com/"  rel="noopener noreferrer" target="_blank" title="Flaticon">www.flaticon.com</a> authors:</h4>
                    <ul>
                        <li><a href="https://www.flaticon.com/authors/good-ware" rel="noopener noreferrer" target="_blank" title="Good Ware">Good Ware</a></li>
                        <li><a href="http://www.freepik.com/" rel="noopener noreferrer" target="_blank" title="Freepik">Freepik</a></li>
                        <li><a href="https://www.flaticon.com/free-icon/thermometer_3030292" rel="noopener noreferrer" target="_blank" title="xnimrodx">xnimrodx</a></li>
                        <li><a href="https://icon54.com/" rel="noopener noreferrer" target="_blank" title="Pixel perfect">Pixel perfect</a></li>
                    </ul>
                </div>
            </Modal>
        </React.Fragment>
    );
}

export default Credits;