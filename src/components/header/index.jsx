import Minhastacklogo from '../../assets/images/Minhastack-logo.png';
import './style.css';
const Header = ()=>{
return(   
     <header>
        <div className='container-logo'>
            <a href="../">
                <img src={Minhastacklogo} alt='logo minhastack'/>
            </a>    
        </div> 

    </header>
);
}


export default Header;