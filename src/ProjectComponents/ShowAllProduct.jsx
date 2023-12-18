import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ShowAllProduct = () => {
    let [products, setProducts]=useState([])
    let navigate = useNavigate()
    let getProduct=async ()=>{
        try {
            let output= await axios({
                method:"get",
                url:"https://project-dw.onrender.com/api/v1/products"
            })
            setProducts(output.data.data.results)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(()=>{
        getProduct()
    },[])


  return (
    <div>
        {products.map((item,i)=>{
            return(
                <div style={{border:"solid red 3px", marginBottom:"5px"}}>
                    <img
                    alt="product img"
                    src={item.productImage}
                    style={{width:"80px",height:"80px"}}
                    ></img>
                    <br></br>
                    name:{item.name}
                    <br></br>
                    Price:{item.price}
                    <br></br>
                    Quantity:{item.quantity}
                    <br></br>
                    company:{item.company}
                    <br></br>
                    <button
                    onClick={async()=>{
                        try {
                            await axios({
                                method:"delete",
                                url:`https://project-dw.onrender.com/api/v1/products/${item._id}`
                            })
                            getProduct()
                            
                        } catch (error) {
                            console.log("error")
                            
                        }
                        
                    }}
                    >Delete Products</button>
                    <button
                    onClick={()=>{
                        navigate(`/product/${item._id}`)
                    }}
                    >view product</button>
                    <button onClick={()=>{
                        navigate(`products/${item._id}`)
                    }}>View Product</button>
                    <button onClick={()=>{
                        navigate(`products/update${item._id}`)
                    }}>edit product </button>
                    </div>
            )
        })}
    </div>
  )
}

export default ShowAllProduct