import './styles.css'

export default function Button(props) {
    return(
        <div className="container-button">
            <input 
                onClick={props.function}
                value={props.value}
                key={props.key} 
                type="button" 
                className="button"
            />
        </div>
    )
}