import './style.css';
import Minhastacklogo from '../../assets/images/Minhastack-logo.png';
const Header = ()=>{
return(   
     <header>
        <div className='container-logo'>
            <img src={Minhastacklogo} alt='logo minhastack'/>    
        </div> 

    </header>
);
}


export default Header;