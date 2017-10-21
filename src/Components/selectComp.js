import React from 'react';
import '../Containers/style.css';
export default({select,input,option, meta: {error, touched}})=>{
  return(
    <div>
      <select {...input}>
        <option>select</option>
        <option>Mechanical engineering</option>
        <option>Computer Engineering</option>
        <option>Civil Engineering</option>
        <option>Chemical Engineering</option>
        <option>Electronics</option>
        <option>Aerospace Engineering</option>
        <option>Bio Chemical Engineering</option>
        <option>Bio Technology</option>
        <option>Chemical & Alcohol Technology</option>
        <option>Electrical Engineering</option>
        <option>Energy Technology</option>
        <option>Fire & Safety Engineering</option>
      </select>
     <div className="error">
       {touched && error}
     </div>
    </div>
  );
}
