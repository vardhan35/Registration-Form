import React from 'react'
import {Formik,Form, Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'

const FormRegister = () =>{
    const initialValues={
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    }
    const validateSchema =Yup.object({
        name: Yup.string().required('Required!'),
        email:Yup.string().email('Invalid Email').required('Required!'),
        password: Yup.string().required('Required!'),
        confirmPassword:Yup.string().oneOf([Yup.ref('password'), ''], 'Password Must match').required('Required!')
    })
    const onSubmit = (values, onSubmitProps) =>{ 
        console.log('Form Data', values);
        onSubmitProps.resetForm()
    }
    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validateSchema}
        onSubmit={onSubmit}
        >
            {
                formik =>{
                    return <Form className='form'>
                        <div className='field'>
                        <Field className='input'  type='name' name='name' placeholder='Give Your Name...'/>
                        <ErrorMessage className='errmsg' component='div'  name='name'/>
                        </div>
                        <div className="field">
                        <Field className='input' type='email' name='email' placeholder='Give Your Email...'/>
                        <ErrorMessage className='errmsg'  component='div'  name='email'/>
                        </div>
                        <div className="field">
                        <Field className='input'  type='password' name='password' placeholder='Give Your password...'/>
                        <ErrorMessage className='errmsg'  component='div'  name='password'/>                                                
                        </div>
                        <div className="field">
                        <Field className='input'  type='password' name='confirmPassword' placeholder='Give Your password again...'/>
                        <ErrorMessage className='errmsg'  component='div'  name='confirmPassword'/>
                        </div>
                        <button className='button' type='submit'>Submit</button>
                    </Form>
                }
            }
        </Formik>
    )
}

export default FormRegister
