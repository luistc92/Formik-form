import React from "react";
import {useFormik} from "formik"

// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''

    },
    onSubmit: values=> {
      console.log('form:', values);
      alert('Login successful');
    },
    validate: values =>{
      let errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.email) {
        errors.email = 'Field Required';
      } else if (!regex.test(values.email)) {
        errors.email = "Username should be an email";
      }

      if (!values.password) errors.password = "Field Required";

      return errors;
    }

  });


  return (
    <div>
      <p>
        The app is ready! You can proceed with the task instructions. TODO:
        build you form here.
      </p>

      <form onSubmit={formik.handleSubmit}>
      <div>Email</div>
      <input id ='emailField' name = "email" type='text' onChange={formik.handleChange} value ={formik.values.email}/>
      {formik.errors.email ? <div id = 'emailError' style={{color:'red'}}>{formik.errors.email}</div>:null}
        <div>Password</div>
        <input id = 'pswField' name = "password" type = 'text' onChange={formik.handleChange} value ={formik.values.password}/>
        {formik.errors.password ? <div  id = 'pswError' style={{color:'red'}}>{formik.errors.password}</div>:null}
       
        <input id ='submitBtn' type = 'submit'/>
      </form>
    </div>
  );
}

export default App;
