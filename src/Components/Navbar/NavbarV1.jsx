import './Navbar.css';



const Navbar = () => {

    return (
        <>

            <div className='navbar-container'>

                <div className='navbar-title'>
                    <h2>Navbar</h2>
                </div>

                <div className='navbar-links'>
                    <div className='link'>
                        <a href="#" className=''> Home</a>

                    </div>

                    <div className='link'>
                        <a href="#" className=''>Contact Us</a>

                    </div>

                    <div className='link'>
                        <a href="#" className=''>About Us</a>

                    </div>
                </div>

            </div>



        </>
    )
}


export default Navbar