
import "./style.css";
//components
import BookBox from "../../components/book-container";
import Header from "../../components/header";
//logos 
import javascript from "../../assets/images/techs/javascript.png";
import python from "../../assets/images/techs/python.png";
import nodejs from "../../assets/images/techs/nodejs.png";
import reactjs from "../../assets/images/techs/reactjs.png";
// books
import jsdefinitiveguide from '../../assets/images/books/jsdefinitiveguide.jpg';
import jsaltodesempenho from '../../assets/images/books/jsaltodesempenho.jpg';
import padroesjs from '../../assets/images/books/padroesjs.jpg';
import intropython from '../../assets/images/books/intropython.jpg';
import pyFluente from '../../assets/images/books/pyFluente.jpg';
import pensePython from "../../assets/images/books/pensePython.jpg"

function BooksPage() {

  return (

<div className="App">

      <Header></Header>
        <section className="language-section">

          <h2>O queridinho da web</h2>

          <div className="container-logo-language">
            <img src={javascript} alt="javascript logo"/> 
            <p>javascript é uma das linguagens mais populares quando o assunto é desenvolvimento web hoje em dia.</p>
          </div>

        <BookBox 
          bookName="javascript o guia definitivo" 
          bookimage={jsdefinitiveguide} 
          afiliateLink="https://amzn.to/3hPrXJ2"/>
        
        <BookBox 
          bookName="javascript de alto desempenho" 
          bookimage={jsaltodesempenho} 
          afiliateLink="https://amzn.to/35Veyga"/>

        <BookBox 
          bookName="padrões javascript" 
          bookimage={padroesjs} 
          afiliateLink="https://amzn.to/3vJmewC"/>

        </section>

        <section className="language-section">

          <h2>O faz tudo</h2>

          <div className="container-logo-language">
            <img src={python} alt="python logo"/> 
            <p>Segundo pesquisas o python vem crescendo de popularidade nos ultimos tempos. Quando o assunto é python fica difícil de pensar o que não da pra fazer...</p>
          </div>

        <BookBox 
          bookName="Introdução à Programação com Python" 
          bookimage={intropython} 
          afiliateLink="https://amzn.to/3MtSg5T"/>

        <BookBox 
          bookName="Python Fluente: Programação Clara, Concisa e Eficaz" 
          bookimage={pyFluente} 
          afiliateLink="https://amzn.to/3MuIAYL"/>

        <BookBox 
          bookName="Pense em Python: Pense Como um Cientista da Computação" 
          bookimage={pensePython} 
          afiliateLink="https://amzn.to/3730lOx"/>
        

        </section>
        
        <section className="language-section">

          <h2>O revolucionário</h2>

          <div className="container-logo-language">
            <img src={nodejs} alt="node js logo"/> 
            <p>Esse aqui conseguiu transcender. Não é uma linguagem de programação, é uma plataforma que fez com que o javascript saisse do frontend e conseguisse ser usado também no backend. Então, esse é o cara!</p>
          </div>

          <BookBox/>
          <BookBox/>
          <BookBox/>

        </section>

        <section className="language-section">

          <h2>O popular e filho de pai rico.</h2>

          <div className="container-logo-language">
            <img src={reactjs} alt="python logo"/> 
            <p>Criado pelo Facebook, o react é uma framework frontend onde você consegue desenvolver um frontend escalável e maravilhoso. </p>
          </div>

          <BookBox/>
          <BookBox/>
          <BookBox/>

        </section>

        



    </div>
  );
}

export default BooksPage;
