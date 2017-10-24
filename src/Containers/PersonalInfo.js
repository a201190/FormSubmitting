import React from 'react';
import './style.css';
import {Field, reduxForm} from 'redux-form';
import FieldComp from '../Components/FieldComp';
import DateComp from '../Components/DateComp';
import {Link} from 'react-router-dom'
class PersonalInfo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {label:'First Name', name:'firstName', placeholder:'First Name'},
                {label:'Last Name',name:'lastName', placeholder:'Last Name'},
                {label:'Father Name',name:'fatherName', placeholder:'Father Name'},
                {label:'Mother Name',name:'motherName', placeholder:'Mother Name'},
            ],
            date:[
              {label:'Date of Birth', name:'date'}
            ]
        }
    }
    renderPersonalInfo(ev){
        return(
        this.state.data.map((data, i)=>{
            return(
                <div key={i}>
                    <label>{data.label}</label>
                    <Field name={data.name} placeholder={data.placeholder} component={FieldComp}/>
                </div>
            );
        })
      );
    }
    dateRander(ev){
      return(
        this.state.date.map((date,i)=>{
          return(
            <div key={i}>
              <label>{date.label}</label>
              <Field  component={DateComp}  name={date.name}/>
            </div>
          );
        })
      );
    }
    render(){
        return(
            <div className="formStyle">
                <form onSubmit={this.props.handleSubmit(()=>this.props.onSurveySubmit())}>
                    {this.renderPersonalInfo(this.ev)}
                    {this.dateRander(this.ev)}
                    <button type="submit"><Link to="address">Next</Link></button>
                </form>
            </div>
        );
    }
}
function validate(values) {
  const error={};
  if(!values.firstName){
    error.firstName='You must provide an First Name';
  }
  if(!values.lastName){
    error.lastName='You must Provide an Last Name';
  }
  if(!values.fatherName){
    error.fatherName='You Must Provide an Father Name';
  }
  if(!values.motherName){
    error.motherName='You Must Provide an Mother Name';
  }
  if(!values.date){
    error.date='You Must Provide an date of birth';
  }
  return error;
}
export default reduxForm({
    validate,
    form:"PersonalInfo",
    destroyOnUnmount:false
})(PersonalInfo);
