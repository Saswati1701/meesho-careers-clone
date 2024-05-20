import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/meesho-logo.png"

const Navbar = () => {
  const [active, setActive] = useState();
  const links = [
    ["/", "Home"], 
    ["/tech", "Tech at Meesho"], 
    ["/life", "Life at Meesho"], 
    ["/blog", "Blog"], 
    ["/newsroom", "News"],
    ["/jobs", "JOIN US"]
  ]

  return (
    <div className='navbar'>
      <img src={Logo} alt="" height="72px" />
      <div className='linksContainer'>
        {
          links.map((item, i)=>{
            return(
              <Link 
                key={i} 
                to={item[0]}
                className={window.location.pathname===links[i][0]?"active":""}
                onClick={()=>{
                  setActive(links[i][0]);
                }}
              >{item[1]}</Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Navbar