import Header from "../../components/header";
import './style.css';
import TextBox from "../../components/text-box";
import ConfettiComponent from '../../components/confetti';
import { Link } from "react-router-dom";


const HomePage = () => {
   
    const conffetiAnimation = ctx => {
        ctx.beginPath()
        for (let i = 0; i < 22; i++) {
            const angle = 0.35 * i
            const x = (0.2 + (1.5 * angle)) * Math.cos(angle)
            const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
            ctx.lineTo(x, y)
        }
        ctx.stroke()
        ctx.closePath()
    }
   
    return (

        <div className="container-principal">

            <ConfettiComponent className="conffeti"
                drawShape={conffetiAnimation}
            />
            <Header />

            <div className="principal-text">
                <h1>Que bom que você está aqui!</h1>
            </div>

            <div className="cta-container-text">

                <TextBox 
                    text="Tenha acesso as grandes mentes do mercado da programação através de suas obras"
                    width="180"
                    height="180"
                    measureW="px"
                    measureH="px"
                    />
                    
                <TextBox 
                text="Comece bem e do jeito certo, com conteúdos reconhecidos em todo mercado!" 
                width="180"
                height="180"
                measureW="px"
                measureH="px"
                />
                
                <TextBox 
                text="Seja um ponto fora da curva se destacando com mais conhecimento que a maioria dos outros devs." 
                width="180"
                height="180"
                measureW="px"
                measureH="px"
                />

            </div>

            <div className="cta-container-button">
                <Link to="/books" className="cta-button-default">Começar agora</Link>
            </div>

            <hr />

        </div>

    )
}

export default HomePage;