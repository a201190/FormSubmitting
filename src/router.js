import React from 'react';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom'
import PersonalInfo from './Containers/PersonalInfo';
import Address from './Containers/Address';
import Experience from './Containers/Experience';
import Education from './Containers/Education';
import SubmittingForm from './Containers/SubmittingForm';
import {connect} from 'react-redux';
import * as action from './action'
class RouterApp extends React.Component{
    componentDidMount() {
        this.props.personalInfo();
      }
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={PersonalInfo}/>
                    <Route exact path='/address' component={Address}/>
                    <Route exact path='/education' component={Education}/>
                    <Route exact path='/experience' component={Experience}/>
                    <Route exact path='/submittingform' component={SubmittingForm}/>                    
                </Switch>
            </BrowserRouter>
        );
    }
}
export default connect(null, action)(RouterApp);