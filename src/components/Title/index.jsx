import './styles.css'

export default function Title(props) {
    return(
        <div className="container-title">
            <h4>Question {props.question_number}</h4>
            <p>{props.title}</p> 
        </div>
    )
}