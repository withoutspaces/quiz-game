import './styles.css'

export default function Button(props) {
    return(
        <div className="container-button">
            <input type="button" value={props.value} className="button" onClick={props.function}/>
        </div>
    )
}