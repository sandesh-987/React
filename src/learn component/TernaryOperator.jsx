import React from 'react'

const TernaryOperator = () => {
  let age = 25
    return (
        <div> 
            {
                age>=18?<div>he can enter room</div>
                :<div>he canot enter room </div>
            }
            {
                age===16?<div>your age is 16</div>:
                age===17?<div>your age is 17</div>:
                age===18?<div>your age is 18</div>:
                <div>your age is neither 18 17 16</div>           
                 }
        </div>
    

  )
}

export default TernaryOperator