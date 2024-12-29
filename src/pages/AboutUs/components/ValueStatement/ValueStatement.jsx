import React from 'react'

import './ValueStatement.css'
import { assets } from '../../../../assets/assets'

const ValueStatement = ({setShowValueStatement ,  valueStatement}) => {
  return (
    <div className='value-statement'>
        <div className="value-statement-container">
            <div className="value-statement-words">
            <h2>{ valueStatement.name}</h2>
        <ul>
        {
            
            valueStatement.map((item,index)=>{
                return(
                    <li>
                        {/* <span>{item.title}</span> */}
                        <p><span>{item.title}</span>{item.content}</p>
                    </li>

                )
            })
        }
        </ul>

            </div>
        
        <img src={assets.close_sign} className="close-sign" onClick={()=>setShowValueStatement("close")}/>
       
        

        </div>
        
        
        
        

      
    </div>
  )
}

export default ValueStatement
