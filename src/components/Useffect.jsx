import React,{useState,useEffect} from 'react'
import './Useffect.css'



const Useffect = () => {
  const [user,setUser] = useState([]);
  const getUser = async () => {
    const response = await fetch('https://api.github.com/users');
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
        <img src={currentElement.avatar_url} ></img>
        <div className="container">
          <h4><b>{currentElement.login}</b></h4>
          <h4><b>{currentElement.html_url}</b></h4>
          
        </div>
        </div>

      )
    })}
   
    
    </div>
  )
}

export default Useffect