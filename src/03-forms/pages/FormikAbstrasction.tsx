import { useFormik,Formik,Field,Form,ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {MyCheckbox,MySelect,MyTextInput} from '../components'

import  '../styles/styles.css' 
const FormikAbstrasction = () => {
   
  return (
    <div>
        <h1>Formik Abstraction</h1>

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
            <MyTextInput label='FirstName' name='FirstName' placeholder='Alfredo'/>

            <MyTextInput label='LastName' name='LastName' placeholder='Silva'/>

            <MyTextInput label='Email' name='email' placeholder='Silva@gmail.com' type='email'/>
           
            <MySelect label='Job Type' name="jobType">
                <option value="">Pick Something</option>
                <option value="developer">developer</option>
                <option value="designer">designer</option>
                <option value="it-senior">it-senior</option>
                <option value="it-jr">It-jr</option>
            </MySelect>

            <MyCheckbox label="Terms & Conditions" name="terms" />

            <button type='submit'>Submit</button>
            </Form>
            )
        }
            
        </Formik>
        
    </div>
  )
}

export {FormikAbstrasction}