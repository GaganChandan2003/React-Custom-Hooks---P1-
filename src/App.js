import React from 'react'
import useFetch from './Hooks/useFetch'

const App = () => {
  const {loading,error,data}=useFetch("https://api.github.com/search/users?q=GaganC");
  return (
    <div style={{textAlign:'center'}}>
      {loading&&"Loading"}
      {
        data?.length>0&&data.map((el)=>
        (
          <div key={el.id}><h2>{el.login}</h2></div>
        ))
      }
      {error&&"404"}
    </div>
  )
}

export default App
