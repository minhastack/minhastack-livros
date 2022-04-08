import "./style.css";
export default function TextBox(props){
    const text = props.text
    const boxWidth = props.width;
    const boxHeight = props.height;
    const measureW = props.measureW;
    const measureH = props.measureH;
    return(
        <div 
        className="text-box"
        style={
            {
                width: `${boxWidth}${measureW} ` || "auto",
                height: `${boxHeight}${measureH}` || "auto"
            }
        } 

>
            <p><strong>{text}</strong></p>
        </div>
    )
      
}