import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Home from './Home.jsx';
import App from '../App';



function TabApp() {

    const [value, setValue] = useState('one');

    const handleChange = (event, value) => {
        setValue(value);
        };


return(
    <div>
        <Tabs value={value} onChange={handleChange}>
            <Tab value="one" label="Item One" />
            <Tab value="two" label="Item Two" />
        </Tabs>
            {value === 'one' && <div><Home/></div>}
            {value === 'two' && <div><App/></div>}
    </div>
);
}

export default TabApp;
