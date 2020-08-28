import React from 'react';

import styles from './Layout.module.css';
import Toolbar from '../../components/Toolbar/Toolbar';
import References from '../../components/References/References';

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