import React from 'react';
import { Formik } from 'formik';
import validationSchema from "./validationSchema";
import { useNavigate} from "react-router-dom";

 function Form() {

  const navigate = useNavigate()
  return(
    <>
      <div>
    
    <Formik
      initialValues={{ email: '', password: '' }}
    
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        const { email, password } = values;
        setSubmitting(true);
       
        navigate('/dashboard');
       }}
    >
     {({
       values,
       errors,
       touched,
       handleChange,
       handleSubmit,
       isSubmitting,
       /* and other goodies */
     }) => (
       <form onSubmit={handleSubmit}>
         <input
           type="email"
           name="email"
           placeholder="Email Address"
           onChange={handleChange}
           value={values.email}
         />
         <div style={{paddingBottom:"20px", color:"red"}}>
         {errors.email && touched.email && errors.email}
         </div>
        
         <input
           type="password"
           name="password"
           onChange={handleChange}
           placeholder="Password"
           value={values.password}
         />
         <div style={{color:"red"}}>
         {errors.password && touched.password && errors.password}
         </div>
        
        
         <div className="password">
           <a href="">FORGOT PASSWORD</a>
         </div>

         <div className="buttonWrap">

         
           <button className="button" type="submit" disabled={isSubmitting}>
             LOG IN
           </button>
         </div>
       
       </form>
     )}
   </Formik>
 </div>
    </>
  )
 };

export default Form;
