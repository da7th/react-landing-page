import './Navbar.css'

function Navbar() {
  return (
    <nav className='navbar-container'>
        <div className='navbar-logo'>
            <span>LANDING PAGE</span>
        </div>

        <div className='navbar-menu'>
            <a href="/" className='login-link'>Login</a>
            <a href="/" className='register-btn'>Registro</a>
        </div>
    </nav>
  );
}

export default Navbar;
