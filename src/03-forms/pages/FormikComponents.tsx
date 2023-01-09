import { useFormik,Formik,Field,Form,ErrorMessage } from 'formik'
import * as Yup from 'yup'
import  '../styles/styles.css'

const FormikComponents = () => {
   
  return (
    <div>
        <h1>Formik Components</h1>

        <Formik 
            initialValues={{
                FirstName:'',
                LastName:'',
                email:'',
                terms: false,
                jobType:''
            }}
            onSubmit={(values)=>{
                console.log(values)
            }}
            validationSchema={ Yup.object({
            FirstName: Yup.string()
                                .max(15,'debe tener 15 caracteres')
                                .required('requerido'),
            LastName: Yup.string()
                                .max(15,'debe tener 15 caracteres')
                                .required('requerido'),
            email: Yup.string()
                            .email('Email no tiene un formato valido')
                            .required('requerido'),
            terms : Yup.boolean()
                        .oneOf([true],'Debe aceptar las condiciones'),
            jobType: Yup.string()
                        .notOneOf(['it-jr'],'Esta opcion no es permitida')
                        .required('Requerido')
        })
    }>
        { (Formik)=>(
            <Form>
            <label htmlFor="firtName">FirstName</label>
            <Field name="FirstName" type="text"/>
            <ErrorMessage name='FirstName' component="span"/>

            <label htmlFor="LastName">LastName</label>
            <Field type="text"name="LastName"/>
            <ErrorMessage name='LastName' component="span"/>

            <label htmlFor="Email">Email</label>
            <Field type="email" name="email"/>
            <ErrorMessage name='email' component="span"/>
           
            <label htmlFor="jobType">Job Type</label>
            <Field as="select" name="jobType">
                <option value="">Pick Something</option>
                <option value="developer">developer</option>
                <option value="designer">designer</option>
                <option value="it-senior">it-senior</option>
                <option value="it-jr">It-jr</option>
            </Field>
            <ErrorMessage name='jobType' component="span"/>

            <label htmlFor="terms">
                <Field type="checkbox" name="terms"/>
                Terms And Conditions
            </label>
            <ErrorMessage name='terms' component="span"/>

            <button type='submit'>Submit</button>
            </Form>
            )
        }
            
        </Formik>
        
    </div>
  )
}

export  {FormikComponents}