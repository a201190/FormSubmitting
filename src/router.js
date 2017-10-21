import React from 'react';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom'
import PersonalInfo from './Containers/PersonalInfo';
import Address from './Containers/Address';
import Experience from './Containers/Experience';
import Education from './Containers/Education';
class RouterApp extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={PersonalInfo}/>
                    <Route exact path='/address' component={Address}/>
                    <Route exact path='/education' component={Education}/>
                    <Route exact path='/experience' component={Experience}/>                    
                </Switch>
            </BrowserRouter>
        );
    }
}
export default RouterApp;