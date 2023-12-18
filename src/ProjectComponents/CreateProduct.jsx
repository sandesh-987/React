import axios from 'axios'
import{Form,Formik} from "formik"
import React from 'react'
import * as yup from "yup"
import { FormikCheckBox } from 'formik'


const CreateProduct = () => {

   let initialValues = {
    name:"",
    quantity:"0",
    featured:"false",
    productImage:"",
    manufactureDate:"",
    company:"apple"
   }
   let onsubmit = async (values,other)=>{
    try { 
      let output = await axios({
        method:"post",
        url:"https://project-dw.onrender.com/api/v1/products",
        data:values,
       })
    } catch (error) {
      console.log(error.message)
       }
    }


    let validationSchema = yup.object({
      name: yup.string().required(" Name is required "),
      quantity: yup.number().required("quantity  is required"),
      price: yup.number().required("price  is required"),
      featured: yup.boolean(),
      productImage: yup.String().required(" productImage is required"),
      manufactureDate: yup.String().required(" manufactureDate is required"),
      company: yup.string().required(" company is required"),
    
    })
    let companyOptions =[
      {
        label:"Select Company",
        value:"",
        disabled:"true"
      },
      
      {
       label:"Apple",
       value:"apple",
      },
      {
       label:"Samsung",
       value:"samsung",
      },
      {
       label:"Dell",
       value:"dell",
      },
      {
       label:"Mi",
       value:"mi",
      }
    ]
    return ( 
        <div>
        <Formik
        initialValues={initialValues}
        onSubmit={onsubmit}
        validationSchema={validationSchema}
        >
        {(Formik)=>{
          return(
            <Form>
              <FormikInput name="name" label="Name" type="text" required={true}></FormikInput>
              <FormikInput name="quantity" label="Quantity" type="number" required={true}></FormikInput>
              <FormikInput name="price" label="Price" type="number" required={true}></FormikInput>
              <FormikCheckBox name="featured" label="Featured"></FormikCheckBox>
              <FormikInput name="productImage" label="Product image" type="text" required={true}></FormikInput>
              <FormikInput name="manufactureDate" label="ManufactureDate" type="date" required={true}></FormikInput> 
    
              <FormikSelect name="company" label="Company" required ={true} options={companyOptions}></FormikSelect>
              <button type="submit">Create Product</button>
            </Form>
            )
        }}
        </Formik>
      </div>
      )

   }

  

export default CreateProduct