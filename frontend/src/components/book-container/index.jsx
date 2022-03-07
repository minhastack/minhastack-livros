import './style.css';
const BookBox = (props)=>{
    const afiliateLink = props.afiliateLink;
    const bookimage = props.bookimage;
    const bookName = props.bookName;
    return (

<div className="books-container">
        <div className="book-box">
                <img src={bookimage} className="book"/>
                <p>{bookName}</p>
                <a href={afiliateLink} className="cta-button-secundary">Obter agora</a>            
        </div>
    </div>
)
}

export default BookBox;
