import { Link } from 'react-router-dom'
import '../Navbar/Navbar.css'

function Navbar ({links, title}) {

    console.log(links)

    return (
        <>
            <div className='navbar-container'>

                <div className='navbar-title'>
                    <h1>{title}</h1>
                </div>

                <div className='navbar-links'>
                    {
                        links.map((link,index) => (
                    
                            <div key={index} className='link'>
                                <Link  to={link.href}>{link.name}</Link>
                            </div>
                        )
                        )
                    }
                            
                </div>

            </div>
        </>
    )
}

{/*
    links.map((link,index) => {

        <div key={link.index} className='link'> 
            <a href={link.href}> {link.name}</a>
        <div/>
    
    })

  */  
    
}
export default Navbar
