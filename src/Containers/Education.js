import React from 'react';
import './style.css';
import {Field, reduxForm} from 'redux-form';
import selectComp from '../Components/selectComp';
import FieldComp from '../Components/FieldComp';
import numberComp from '../Components/numberComp';
class Education extends React.Component{
  constructor(props){
    super(props);
    this.AddEducation=this.AddEducation.bind(this);
    this.state={
      Education:[{},{}],
      isEditing:false,
     }
  }
  
AddEducation(ev){
  const Education=this.state.Education;
  
}
renderField(){
  if(this.state.isEditing===false){
    return(
      this.state.Education.map((Education, i)=>{
        return  (
        <div key={i}>
          <label>Education Type</label>
          <Field  component={selectComp} name='eduType'/>
          <label>Education</label>
          <Field  component={FieldComp} placeholder="Enter your Education lavel" name="education"/>
          <label>Percentage</label>
          <Field component={numberComp} placeholder="Enter your Percentage" name="percentage"/>
        </div>
      )
      })
    )
  }
}
    render(){
      console.log(this.state.Education)
        return(
            <div>
       <form className="formStyle" onSubmit={this.props.handleSubmit((values)=>{console.log(values)})}>                    
                {this.renderField()}           
                <button type="submit">Next</button>
              <button type="reset" onClick={((ev)=>{
                ev.preventDefault();
                this.AddEducation(this.ev) ; 
              })} >Add Education</button>   
      </form>                         
    </div>
        );
    }
}
function validate(values) {
  const error={}

  return error;
}
export default reduxForm({
  validate,
  form:'Education'
})(Education);
