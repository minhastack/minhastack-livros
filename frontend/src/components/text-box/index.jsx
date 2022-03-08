import "./style.css";
export default function TextBox(props){
    const text = props.text

    return(
        <div className="text-box">
            <p><strong>{text}</strong></p>
        </div>
    )
      
}