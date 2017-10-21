import React from 'react';
import '../Containers/style.css';
export default({textarea, input, meta: {error, touched}})=>{
  return(
    <div>
     <textarea  {...input} className="InputType"/>
     <div className="error">
       {touched && error}
     </div>
    </div>
  );
}
