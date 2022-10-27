import './styles.css'

export default function Button(props) {

    const decodeString = (value) => {
        const txt = document.createElement('textarea')
        txt.innerHTML = value
        return txt.value
    }

    return (
        <button
            onClick={props.handleButton}
            type="button"
            className="button"
        >
            <p>{decodeString(props.value)}</p>
        </button>
    )
}