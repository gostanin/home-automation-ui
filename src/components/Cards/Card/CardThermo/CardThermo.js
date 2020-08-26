import React, { useState } from 'react';

// import styles from './CardThermo.module.css';
import tempHot from '../../../../assets/temphot.png';
import tempCold from '../../../../assets/tempcold.png'; import Card from '../CardBase/CardBase';
import { Select, MenuItem } from '@material-ui/core/';

const CardThermo = (props) => {
    const [isHot, setIsHot] = useState(false);
    const [selectValue, setSelectValue] = useState(0)

    const tempChangeHandler = (event) => {
        const value = event.target.value;
        console.log(value)
        if (value > 0) {
            setIsHot(true);
        }
        else {
            setIsHot(false);
        }
        
        setSelectValue(value);
    }

    return (
        <Card ImagePath={isHot ? tempHot : tempCold}>
            <Select
                value={selectValue}
                onChange={tempChangeHandler}
                inputProps={{ 'aria-label': 'Without label' }}>
                <MenuItem value={-20}>-20</MenuItem>
                <MenuItem value={-15}>-15</MenuItem>
                <MenuItem value={-10}>-10</MenuItem>
                <MenuItem value={-5}>-5</MenuItem>
                <MenuItem value={-0}>0</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={20}>20</MenuItem>
            </Select>
            {/* <Button 
                variant="outlined"
                color="primary"
                disableElevation>
                    Settings
            </Button>     */}
        </Card>
    );
}

export default CardThermo;