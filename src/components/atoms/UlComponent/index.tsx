import React from 'react'

interface UlComponentProps{
  items:string[];
}
const UlComponent:React.FC<UlComponentProps> = ({items}) => {
  return (
    <ul>
        {items.map((item,index)=>(
            <li key={index}>{item}</li>
        ))}
    </ul>
  )
}

export default UlComponent 