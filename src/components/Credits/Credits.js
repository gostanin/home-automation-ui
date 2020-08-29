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
                    <h4>Imagies provided by <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> authors:</h4>
                    <ul>
                        <li><a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a></li>
                        <li><a href="http://www.freepik.com/" title="Freepik">Freepik</a></li>
                        <li><a href="https://www.flaticon.com/free-icon/thermometer_3030292" title="xnimrodx">xnimrodx</a></li>
                        <li><a href="https://icon54.com/" title="Pixel perfect">Pixel perfect</a></li>
                    </ul>
                </div>
            </Modal>
        </React.Fragment>
    );
}

export default Credits;