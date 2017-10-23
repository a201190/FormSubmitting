import React from 'react';
import './style.css';
import {Field, reduxForm} from 'redux-form';
import selectComp from '../Components/selectComp';
import FieldComp from '../Components/FieldComp';
import numberComp from '../Components/numberComp';
const REducationTyp = value => (value ? undefined : 'Please Provide Your Education Type');
const REducation = value => (value ? undefined : 'Please Provide your Education')
const RPercentage = value => (value ? undefined : 'Please Provide Your Percentage')
class Education extends React.Component{
  constructor(props){
    super(props);
    this.AddEducation=this.AddEducation.bind(this);
    this.state={
      name:{percentage:'percentage',eduType:'eduType',education:'education'},
      Education:[{}],
     }
  }
  AddEducation(){
    this.setState({ Education: this.state.Education.concat([{eduType:'', education:'',percentage:''}]) });
  }
    render(){
        return(
            <div>
       <form className="formStyle" onSubmit={this.props.handleSubmit((values)=>{console.log(values)})}>
                {this.state.Education.map((Education, i, j, k)=>{
                  return  (
                  <div key={i}>
                    <label>Education Type</label>
                    <Field  component={selectComp} validate={REducationTyp} name={'eduType'+i} />
                    <label>Education</label>
                    <Field  component={FieldComp} validate={REducation} placeholder="Enter your Education lavel" name={'education'+i}/>
                    <label>Percentage</label>
                    <Field component={numberComp} validate={RPercentage} placeholder="Enter your Percentage" name={'percentage'+i}/>
                  </div>);
                })}
                <button type="submit">Next</button>
              <button type="reset" onClick={((ev)=>{
                ev.preventDefault();
                this.AddEducation() ;
              })} >Add Education</button>
      </form>
    </div>
        );
    }
}
export default reduxForm({
  form:'Education'
})(Education);
