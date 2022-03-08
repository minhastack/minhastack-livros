import './style.css';
import Minhastacklogo from '../../assets/images/Minhastack-logo.png';
const Header = ()=>{
return(   
     <header>
        <div className='container-logo'>
            <img src={Minhastacklogo} alt='logo minhastack'/>    
        </div> 
        <nav className='container-menu'>
            <a href="/">Início</a>
        </nav>
    </header>
);
}


export default Header;