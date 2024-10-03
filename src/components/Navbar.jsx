const Navbar = () =>{
    return (
    <nav className="nav-bar">
      
        <span className="logo">Nurture.</span>
        <ul className="nav-ul">
            <li className="nav-link"><a href="">Home</a></li>
            <li className="nav-link"><a href="">Dropdown</a></li>
            <li className="nav-link"><a href="">Our Staff</a></li>
            <li className="nav-link"><a href="">News</a></li>
            <li className="nav-link"><a href="">About</a></li>
            <li className="nav-link"><a href="">Gallery</a></li>
        </ul>
        <button className="enrol-btn"> ENROL NOW</button>
        
    </nav>
    )
}
export default Navbar;