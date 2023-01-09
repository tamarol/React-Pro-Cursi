import { Formik,Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';
import '../styles/styles.css'

const RegisterFormikPage = () => {
   
  return (
    <div>
       <h1>RegisterFormikPage</h1>
      <Formik
      initialValues={{
        name: '',
        email: '',
        password1: '',
        password2:''
      }}
      onSubmit={(values) => {
        console.log(values)
      }}
      validationSchema={
        Yup.object({
          name: Yup.string()
                  .min(2,"el nombre tiene que ser de 3 caracteres o mas").max(15,"el nombre tiene que ser menor a 15 caracteres").required("Requerido"),
          email: Yup.string()
                  .email("revise el formato del correo").required('Requerido'),
          password1: Yup.string()
                      .min(6,"Minimo 6 letras").required("Requerido"),
          password2: Yup.string()
                      .oneOf([Yup.ref('password1')],'Las contraseñas no son iguales')
                      .required("Requerido")
        })
      }
      >
        {(formik) => (
          <Form>
            <MyTextInput label="Nombre" name="name" placeholder='Alfredo'/>
            <MyTextInput label="Email" name="email" placeholder='1@gmail.com'/>
            <MyTextInput label="Password" name="password1" placeholder='*********'/>
            <MyTextInput label="Password2" name="password2" placeholder='*********'/>

            <button type='submit'>Create</button>
            <button type='button' onClick={formik.handleReset}>Reset</button>
          </Form>
        )}    
      </Formik>
    </div>
  )
}

export {RegisterFormikPage}