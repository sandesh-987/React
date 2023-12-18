import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Form from './LearnForm/Form'
import FormikForm from './LearnFormik/FormikForm'

const Application = () => {
  return (
    <div>
        {/* <Form></Form> */}
        <FormikForm></FormikForm>
    </div>
  )
}

export default Application 