import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const LearnToGetParams = () => {
    let params = useParams()
    console.log(params)

   let [query] =useSearchParams() 
   console.log(query.get("name"))
   console.log(query.get("age"))
    return (
    <div>LearnToGetParams</div>
  )
}

export default LearnToGetParams