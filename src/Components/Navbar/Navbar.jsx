import '../Navbar/Navbar.css'

function Navbar ({links}) {

    console.log(links)

    return (
        <>
            <div className='navbar-container'>

                <div className='navbar-title'>
                    <h2>Navbar</h2>
                </div>

                <div className='navbar-links'>
                    {
                        links.map((link,index) => (
                    
                            <div key={index} className='link'>
                                <a href={link.href}>{link.name}</a>
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
