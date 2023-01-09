import { FormikErrors,useFormik } from 'formik'
import  '../styles/styles.css'

interface FormValues{
    FirstName:string,
    LastName:string,
    email:string,
}

const FormikBasicPage = () => {
    const validate =({FirstName,LastName,email}:FormValues)=>{
        const errors:FormikErrors<FormValues> = {};
        if( !FirstName)
        {
            errors.FirstName = 'require';
        }else if(FirstName.length >= 15){
            errors.FirstName = 'Must be 15 caracters or less'
        }

        if( !LastName)
        {
            errors.LastName = 'require';
        }else if(LastName.length >= 10){
            errors.LastName = 'Must be 10 caracters or less'
        }

        if (!email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
          }

        return errors;
    }
    
    const {handleChange,values, handleSubmit,handleBlur, errors,touched} = useFormik({
        initialValues:{
            FirstName:'',
            LastName:'',
            email:'',
        },
        onSubmit: (values)=>{
          console.log(values)  
        },
        validate
    });

  return (

    <div>
        <h1>Basic tutorial</h1>

        <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="firtName">FirstName</label>
            <input 
                type="text" 
                name='FirstName' 
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.FirstName}
            />
            {touched.FirstName && errors.FirstName && <span>{errors.FirstName}</span>}

            <label htmlFor="LastName">LastName</label>
            <input 
                type="text" 
                name='LastName'
                onBlur={handleBlur} 
                onChange={handleChange}
                value={values.LastName}
            />
             {touched.LastName && errors.LastName && <span>{errors.LastName}</span>}

            <label htmlFor="Email">Email</label>
            <input 
                type="email" 
                name='email' 
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
            />
             {touched.email && errors.email && <span>{errors.email}</span>}


            <button type='submit'>Submit</button>
            </form>
    </div>
  )
}

export {FormikBasicPage}