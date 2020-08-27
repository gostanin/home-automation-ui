import React from 'react';

import styles from './Layout.module.css';
import Toolbar from '../../components/Toolbar/Toolbar';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Toolbar />
            <main className={styles.Content}>
                {props.children}
            </main>
        </React.Fragment>
    )
}

export default Layout;