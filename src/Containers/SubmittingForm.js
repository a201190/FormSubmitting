import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as action from '../action'
class SubmittingForm extends React.Component{
    render(){
        return(
            <h1>hello</h1>
        );
    }
}
function mapStateTOProps(store){
console.log(store)
}
export default connect(mapStateTOProps, action)(withRouter(SubmittingForm));