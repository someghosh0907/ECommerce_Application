import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const PathSelector = () => {
  const location=useLocation()
  console.log(location)
  const path=location.pathname
  const ans=path.split("/").filter((x)=>x)
  let definedPath=""
  return (
    <div>
      {ans.length>0 && <Link to='/'>Home</Link>}
      {ans.map((name,index)=>{
        definedPath+=`/${name}`;
        const isLast=index===ans.length -1
        return isLast ? (<span key={definedPath}>/ {name}</span>):
        (<span key={definedPath}>/<Link to={definedPath}>{name}</Link></span>)
      })}
    </div>
  )
}

export default PathSelector
