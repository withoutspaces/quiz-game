import './styles.css'

export default function Title(props) {

    const decodeString = (value) => {
        const txt = document.createElement('textarea')
        txt.innerHTML = value
        return txt.value
    }

    return(
        <div className="container-title">
            <h4>Question {props.question_number}</h4>
            <p>{decodeString(props.title)}</p> 
        </div>
    )
}