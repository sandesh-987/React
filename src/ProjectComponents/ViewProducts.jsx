import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewProducts = () => {
    let params =useParams()
    let id =params.id
    let [product,setProduct]=useState({})

    let getProduct =async ()=>{
        try {
           let output= await axios({
                method:"get",
                url:`https://projects-dw.onrender.com/api/v1/products/${id}`
            })
            setProduct(output.data.data)
        } catch (error) {
            console.log(error.message)
            
        }
        
    }
    useEffect(()=>{
        getProduct()
    },[])
  return (
    <div>
        <p> product name : {product.name}</p>
        <p>product company : {product.company}</p>
        <p>is in featured : {product.featured ? "yes":"no"} </p>
    </div>
  )
}

export default ViewProducts