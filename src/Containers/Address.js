import React from 'react';
import './style.css'
import {Field, reduxForm} from 'redux-form';
import FieldComp from '../Components/FieldComp';
import TextareaComp from '../Components/TextareaComp';
import numberComp from '../Components/numberComp';
class Address extends React.Component{
  constructor(){
    super();
    this.state={
      data:[
        {label:'City',name:'city'},
        {label:'State',name:'state'},
      ],
      openPerm:false
    }
     this.toggle = this.toggle.bind(this);
  }
  toggle(){
    this.setState({
      openPerm:!this.state.openPerm
    })
  }
  rnderAddress(ev){
    return(
      this.state.data.map((data, i)=>{
        return(
        <div key={i}>
          <label>{data.label}</label>
          <Field component={FieldComp} name={data.name}/>
        </div>
      );
      })
    );
  }
  PermanentAdd(){
    if(this.state.openPerm===false){
      return(
          <div>
            <h3>Parmanent Address</h3>
            <label>Street</label>
            <Field component={TextareaComp} name='pstreet'/>
            <label>City</label>
            <Field component={FieldComp} name='pcity'/>
            <label>State</label>
            <Field component={FieldComp} name='pstate'/>
            <label>Zipcode</label>
            <Field component={numberComp} name='pzipcode'/>
          </div>
      )
    }
  }
    render(){
        return(
            <div className="formStyleAdd">
              <h1 style={{textAlign:'center'}}>Address</h1>
              <form  onSubmit={this.props.handleSubmit((values)=>{console.log(values)})}>
                <h3>Correspondence Address</h3>
                <label>Street</label>
                <Field component={TextareaComp} name='street'/>
                {this.rnderAddress(this.ev)}
                <label>Zipcode</label>
                <Field component={numberComp} name='zipcode'/>
                {this.PermanentAdd()}
                <button>Next</button>
              </form>
              <span>if your permanent address same as Correspondence address
                <input type="checkbox" onClick={this.toggle}/>
              </span>
            </div>
        );
    }
}
function validate(values) {
const error={};
if(!values.street){
  error.street='You Must Provide a street';
}
if(!values.city){
  error.city='You Must Provide a city';
}
if(!values.state){
  error.state='You Must Provide a state';
}
if(!values.zipcode){
  error.zipcode='You Must Provide a zipcode';
}
if(!values.pstreet){
  error.pstreet='You Must Provide a street';
}
if(!values.pcity){
  error.pcity='You Must Provide a city';
}
if(!values.pstate){
  error.pstate='You Must Provide a state';
}
if(!values.pzipcode){
  error.pzipcode='You Must Provide a zipcode';
}

return error;
}
export default reduxForm({
  validate,
  form:'Address'
})(Address);
