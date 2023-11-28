import './login-navigation.css';

function LoginNavigation() {
    
    
      return (
        <div className='LN-navigation-holder'>
            <nav className='LN-navbar'>
                <ul className='LN-ul'>
                    <li className='LN-ul-li'><a href='/'>{'< Back'}</a></li>
                    <div className='LN-button-login'>
                        <a href=''>Log In</a>
                    </div>
                    <div className='LN-button-signup' >
                        <a href='/signup/primary-information'>Sign Up</a>
                    </div>
                </ul>
            </nav>
        </div>
      );
    }

export default LoginNavigation;