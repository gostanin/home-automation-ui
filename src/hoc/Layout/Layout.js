import React from 'react';

import styles from './Layout.module.css';
import Toolbar from '../../components/Toolbar/Toolbar';
import Credits from '../../components/Credits/Credits';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Toolbar />
            <main className={styles.Content}>
                {props.children}
            </main>
            <footer>
                <Credits />
            </footer>
        </React.Fragment>
    )
}

export default Layout;