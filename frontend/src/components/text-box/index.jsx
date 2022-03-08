import "./style.css";
export default function TextBox(props){
    const title = props.title
    const text = props.text
    const text2 = props.text2

    return(
        <div className="text-box">
            <h2>{title}</h2>
            <p>{text}</p>
            <p>{text2}</p>
        </div>
    )
      
}