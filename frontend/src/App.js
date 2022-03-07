
import BookBox from "./components/book-container/book-box";
import TextBox from "./components/text-box";
import "./styles/homepage.css";

function App() {
  return (
    <div className="App">

      <div className="principal-text">
        <h1>Que bom que você está aqui!</h1>  
      </div>
      
      <div className="cta-container-text">

      </div>     
     
      <div className="cta-container-button">
        <a href="#" className="cta-button-default">Começar agora</a> 
      </div>

      <hr/>

        
        <BookBox/>
        <BookBox/>
        <BookBox/>
        <BookBox/>



    </div>
  );
}

export default App;
