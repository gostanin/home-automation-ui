import React, { useState } from 'react';

import lightsOn from '../../../../assets/colorbulb.png';
import lightsOff from '../../../../assets/bwbulb.png';
import Card from '../CardBase/CardBase';
import { Switch } from '@material-ui/core/';

const CardLights = (props) => {
    const [status, setStatus] = useState(false);

    const statusChangeHandler = () => {
        setStatus(!status);
    }

    return (
        <Card ImagePath={status ? lightsOn : lightsOff}>
            <Switch color="primary" onChange={statusChangeHandler} />
            {/* <Button 
                variant="outlined"
                color="primary"
                disableElevation>
                    Settings
            </Button>     */}
        </Card>
    );
}

export default CardLights;