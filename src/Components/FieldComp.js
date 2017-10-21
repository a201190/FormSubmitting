import React from 'react';
import '../Containers/style.css';
export default({input, meta: {error, touched}})=>{
  return(
    <div>
     <input  {...input} className="InputType"/>
     <div className="error">
       {touched && error}
     </div>
    </div>
  );
}
