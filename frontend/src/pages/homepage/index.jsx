import './style.css';
import Header from "../../components/header";
import TextBox from "../../components/text-box";
import ConfettiComponent from '../../components/confetti';


const HomePage = () => {
    
    return (

        <div className="container-principal">

            <ConfettiComponent className="conffeti"
                drawShape={ctx => {
                    ctx.beginPath()
                    for (let i = 0; i < 22; i++) {
                        const angle = 0.35 * i
                        const x = (0.2 + (1.5 * angle)) * Math.cos(angle)
                        const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
                        ctx.lineTo(x, y)
                    }
                    ctx.stroke()
                    ctx.closePath()
                }}
            />
            <Header />

            <div className="principal-text">
                <h1>Que bom que você está aqui!</h1>
            </div>

            <div className="cta-container-text">

                <TextBox text="Tenha acesso as grandes mentes do mercado da programação através de suas obras" />
                <TextBox text="Comece bem e do jeito certo, com conteúdos reconhecidos em todo mercado!" />
                <TextBox text="Seja um ponto fora da curva se destacando com mais conhecimento que a maioria dos outros devs." />

            </div>

            <div className="cta-container-button">
                <a href="/books" className="cta-button-default">Começar agora</a>
            </div>

            <hr />

        </div>

    )
}

export default HomePage;