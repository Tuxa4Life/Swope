import React from 'react';
import MainForm from './Components/MainForm';
import FacebookForm from './Components/FacebookForm';
import GoogleForm from './Components/GoogleForm';
import Route from './Components/Route';

const App = () => {

    return (
        <div>

            <Route path={'/'}>
                <MainForm />
            </Route>
            
            <Route path={'/facebook'}>
                <FacebookForm />
            </Route>
            <Route path={'/google'}>
                <GoogleForm />
            </Route>
        </div>
    )
}

export default App;