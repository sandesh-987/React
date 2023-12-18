import { Field, Formik } from "formik";
import React from "react";
import { Form } from "react-router-dom";

const FormikForm = () => {
  let initialValues = {
    firstName: "",
    lastName: "",
    description: "",
  };
  let onSubmit = (value, other) => {};
let validationSchema=yup.object({
  firstName:yup.string().required("first Name is required") ,
  lastName:yup.string().required("last Name is required"), 
  description:yup.string().required("description is required") 
})
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {(formik) => {  
          return (
            <Form>
              <Field name="firstName">
                {({ field, form, meta }) => {
                  return (
                    <div>
                      <label htmlFor="firstName">First Name: </label>
                      <input
                        id="firstName"
                        type="text"
                        value={meta.value}
                        onChange={(e) => {
                          formik.setFieldValue("firstName", e.target.value);
                        }}
                      ></input>
                    </div>
                  );   
                }}
              </Field>

              <Field name="lastName">
                {(field, form, meta) => {
                  return (   
                    <div>
                      <label htmlFor="lastName">Last Name: </label>
                      <input
                        id="lastName"
                        type="text"
                        value={meta.value}
                        onChange={(e) => {
                          formik.setFieldValue("lastName", e.target.value);
                        }}
                      ></input>
                    </div>
                  );
                }}
              </Field>

              <Field name="description">
                {(field, form, meta) => {
                  return (
                    <div>
                      <label htmlFor="description">Description : </label>
                      <input
                        id="description"
                        type="text"
                        value={meta.value}
                        onChange={(e) => {
                          formik.setFieldValue("description", e.target.value);
                        }}
                      ></input>
                    </div>
                  );
                }}
              </Field>
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormikForm;
