import React from 'react';
import {useTheme} from "../contexts/themeContext";

const HomeComponent = () => {
    const themeData = useTheme()

    return (
        <div>
            <hr />
            <span>Current theme is: {themeData.theme ? 'Dark': 'Light'}</span> &nbsp; &nbsp; &nbsp; &nbsp;
            <button onClick={themeData.themeToggleCallback}>
            toggle theme
            </button>
            <hr />
            <div style={themeData.styles}>My context hook in action</div>
        </div>
    );
};

export default HomeComponent;
