import React from 'react';
import { Formik } from 'formik';
import validationSchema from "./validationSchema";
import { useNavigate , Link} from "react-router-dom";

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
         {errors.email && touched.email && errors.email}
         <input
           type="password"
           name="password"
           onChange={handleChange}
           placeholder="Password"
           value={values.password}
         />
         {errors.password && touched.password && errors.password}

         <div className="password">
           <a href="">FORGOT PASSWORD</a>
         </div>

         <div className="buttonWrap">

         
           <Link to={'/dashboard'} className="button" type="submit" disabled={isSubmitting}>
             LOG IN
           </Link>
         </div>
       
       </form>
     )}
   </Formik>
 </div>
    </>
  )
 };

export default Form;
