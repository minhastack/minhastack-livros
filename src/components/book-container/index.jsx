import './style.css';
import {SiAmazon} from 'react-icons/si'
const BookBox = (props)=>{
    const afiliateLink = props.afiliateLink;
    const bookimage = props.bookimage;
    const bookName = props.bookName;
    return (

        <div className="book-box">
                <img src={bookimage} className="book"/>
                <p>{bookName}</p>
                <a href={afiliateLink} className="cta-button-secundary">Obter agora. <SiAmazon className='amazon-icon'/></a>            
        </div>
    )}

export default BookBox;
