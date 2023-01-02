import React from 'react';
import classes from './styles/App.module.scss';
import Main from "./pages/Main";

const App = () => {
    return (
        <div className={classes.App}>
            <Main />
        </div>
    );
}

export default App;