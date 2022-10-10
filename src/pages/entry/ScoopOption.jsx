import React from 'react'

function ScoopOption({name,path}) {
  return (
    <div><img src={`http://localhost:3030/${path}`} alt={`${name} scoop`}/></div>
  )
}

export default ScoopOption