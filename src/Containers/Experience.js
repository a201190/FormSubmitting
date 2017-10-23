import React from 'react';
import {Field, reduxForm} from 'redux-form';
import FieldComp from '../Components/FieldComp';
import numberComp from '../Components/numberComp';
const RcompanyName = value => (value ? undefined : 'Company Name Required');
const RExperience = value => (value ? undefined : 'Experience Required')
class Experience extends React.Component{
  constructor(){
    super();
    this.state={
      data:[{}],
      currentTask:''
    }
  }
AddProfession(ev){
  const currentTask=this.state.currentTask;
  const data=this.state.data;
  data.push(currentTask)
  this.setState({
    data
  })
}
    render(){
        return(
          <div>
            <form className="formStyle" onSubmit={this.props.handleSubmit((values)=>{console.log(values)})}>
              {this.state.data.map((data, i)=>{
                return(
                  <div key={i}>
                    <label>Name of The Company</label>
                    <Field component={FieldComp} validate={RcompanyName} name={"companyName"+[i]}/>
                    <label>Number of years</label>
                    <Field component={numberComp} validate={RExperience} name={"experience"+[i]}/>
                  </div>
                )})}
              <button type="submit">Submit</button>
              <button onClick={((ev)=>{
                ev.preventDefault();
                this.AddProfession(this.ev)
              })}>Add Professional</button>
            </form>
          </div>
        );
    }
}
export default reduxForm({
  form:'Experience'
})(Experience);
