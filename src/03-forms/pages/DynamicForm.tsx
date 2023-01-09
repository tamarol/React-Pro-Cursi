import {Formik,Form} from 'formik';
import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json'
import * as Yup from 'yup';

const initialValues:{[key:string]:any} = {};
const requieredFields:{[key:string]:any} = {};
for(const input of formJson){
  initialValues[input.name] = input.value

  if(!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if(rule.type === 'required'){
        schema = schema.required('Este campo es requerido')
    }
    if(rule.type === 'min'){
      schema = schema.min((rule as any).value || 3 ,`Este campo es debe ser minimo de ${(rule as any).value || 3} caracteres`)
    } 
    if(rule.type === 'email'){
      schema = schema.email("revise el formato del correo")
    } 



  }
  requieredFields[input.name] = schema
}
const validationSchema = Yup.object({...requieredFields});
const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      
      <Formik 
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values)=>{
        console.log(values)
      }}
      >
        {(formik) =>(
          <Form>
             {formJson.map( ({type,name,label,placeholder,options}) =>{
              if(type === 'input' || type ==='password' || type === 'email'){
                  return <MyTextInput
                      key={name} 
                      type={type as any} 
                      label={label} 
                      name={name} 
                      placeholder={placeholder}/>
              } else if(type==='select'){
                return(
                  <MySelect 
                  key={name}
                  label={label} 
                  name={name} 
                  >
                    <option value="">select an option</option>
                    {
                      options?.map(({id,label}) =>(
                        <option key={id} value={id}>{label}</option>
                      ))
                    }
                  </MySelect>
                )
              }
              
              return <span>Type: {type} no es soportado</span>
             })}
          <button type='submit'>submit</button>
          </Form>
        )}
      </Formik>
      
    </div>
  )
}

export {DynamicForm}