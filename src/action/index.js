import axios from 'axios';
const FETCH_USERS='fetch-user'
export const personalInfo = (values) => async dispatch => {
  const res = await axios.get('/',values)
  dispatch({type: FETCH_USERS, payload: res.data});
};
export const Address=(values)=> async dispatch =>{
  const res= await axios.get('/address', values)
  dispatch({type: FETCH_USERS, payload: res.data})

};
export const Education= (values) =>async dispatch=>{
  const res =await axios.get('/education', values);
  dispatch({type: FETCH_USERS, payload: res.data})
};
export const Experience= (values) =>async dispatch=>{
    const res =await axios.get('/experience', values);
    dispatch({type: FETCH_USERS, payload: res.data})
  };
  export const SubmittingForm= (values) =>async dispatch=>{
    const res =await axios.post('/submittingform', values);
    dispatch({type: FETCH_USERS, payload: res.data})
  };