import './styles.css'

export default function Button(props) {

    const decodeString = (value) => {
        const txt = document.createElement('textarea')
        txt.innerHTML = value
        return txt.value
    }

    return(
        <div className="container-button">
            <input 
                onClick={props.function}
                value={decodeString(props.value)}
                key={props.key} 
                type="button" 
                className="button"
            />
        </div>
    )
}