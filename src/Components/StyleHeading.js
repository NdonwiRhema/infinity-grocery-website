import React from 'react'

const StyleHeading = ({text1,text2}) => {
  return (
    <div>
      <div style={{maxWidth:'50%',marginLeft:'25%',marginTop:'18px',textAlign:'center'}}>
            <h4><span style={{borderBottom:'4px solid #f39317',fontWeight:'800'}}>{text1}</span><span> {text2}</span></h4>
      </div>
    </div>
  )
}


export default StyleHeading
