import { useFormik } from 'formik'
import * as Yup from 'yup'
import  '../styles/styles.css'

const FormikYupPage = () => {
   
    
    const { handleSubmit, errors,touched,getFieldProps
    } = useFormik({
        initialValues:{
            FirstName:'',
            LastName:'',
            email:'',
        },
        onSubmit: (values)=>{
          console.log(values)  
        },
        validationSchema: Yup.object({
            FirstName: Yup.string()
                                .max(15,'debe tener 15 caracteres')
                                .required('requerido'),
            LastName: Yup.string()
                                .max(15,'debe tener 15 caracteres')
                                .required('requerido'),
            email: Yup.string()
                            .email('Email no tiene un formato valido')
                            .required('requerido')
        
        })
    });

  return (

    <div>
        <h1>Formik Yup</h1>

        <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="firtName">FirstName</label>
            <input 
                type="text" 
               {...getFieldProps('FirstName')}
            />
            {touched.FirstName && errors.FirstName && <span>{errors.FirstName}</span>}

            <label htmlFor="LastName">LastName</label>
            <input 
                type="text" 
                {...getFieldProps('LastName')}
            />
             {touched.LastName && errors.LastName && <span>{errors.LastName}</span>}

            <label htmlFor="Email">Email</label>
            <input 
                type="email" 
                {...getFieldProps('email')}
            />
             {touched.email && errors.email && <span>{errors.email}</span>}


            <button type='submit'>Submit</button>
            </form>
    </div>
  )
}

export {FormikYupPage}