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
        
          <h4 className='name'>{currentElement.login}</h4>
          <h4 className='github'>{currentElement.html_url}</h4>
          
        
        </div>

      )
    })}
   
    
    </div>
  )
}

export default Useffect