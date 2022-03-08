import './style.css';
import Header from "../../components/header";
import TextBox from "../../components/text-box";

const HomePage = ()=>{
    return (
        <div className="container-principal">      
        <Header/>

        <div className="principal-text">
            <h1>Que bom que você está aqui!</h1>  
        </div>
        
        <div className="cta-container-text">

              <TextBox 
              title="Já imaginou ser um iniciante na programação e ter acesso a mente de profissionais qualificados no mercado?" 
              text="Eu constumo dizer que os livros são uma extensão da mente humana. Com eles conseguimos ter acesso à mente das pessoas mais incríveis do mundo que depositaram alí, parte do seu conhecimento sobre determinado assunto." 
              text2 ="Então pensando nisso, desenvolvemos esse site para você que precisa de um norte e quer ter acesso aos um dos melhores conteúdos sobre programação da internet."/>

        </div>     

        <div className="cta-container-button">
            <a href="/books" className="cta-button-default">Começar agora</a> 
        </div>

      <hr/>

      </div>

    )
}

export default HomePage;