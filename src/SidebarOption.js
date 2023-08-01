import React from 'react'
import "./SidebarOption.css"

function SidebarOption({Icon,title,number,selected}) {
  return (
    <div className={`sidebarOption ${selected && 'sidebarOption--active'}`}>
        <Icon/>
        <h3>{title}</h3>
        <p>{number}</p>
    </div>
  )
}

export default SidebarOption

// import React from 'react';
// import { useEffect,useState } from 'react';

// function Component(){
//     const[abc,setabc]=useState('aman');
//     useEffect(()=>{
//         setabc('sona');
//         console.log(abc);
//     },[abc])
//     return (
//         <div>
//             Aman
//         </div>
//     )
// }

// export default Component;