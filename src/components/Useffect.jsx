import React,{useState,useEffect} from 'react'
import './Useffect.css'



const Useffect = () => {
  const [user,setUser] = useState([]);
  const getUser = async () => {
    const response = await fetch('https://jsonplaceholder.ir/users');
    setUser(await response.json());
    console.log(response.json)
  }
 
  useEffect(() =>{
    getUser();
  },[])
  return (
    <div className = 'maindiv'>
    {user.map((currentElement) => {
      return(
        <div className="card">
        <img src={currentElement.avatar} ></img>
        <div className="container">
          <h4><b>{currentElement.name}</b></h4>
          <p>{currentElement.website}</p>
        </div>
        </div>

      )
    })}
   
    
    </div>
  )
}

export default Useffect