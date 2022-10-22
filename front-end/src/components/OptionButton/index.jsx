
import './styles.css'

export default function OptionButton(props) {
    return (
        <button
            type="button"
            className="option-button"
            style={props.name === 'Jump' ? { background: 'rgb(250, 255, 50)', color: '#000' } : null}
            onClick={props.handleOptionButton}
        >
            <p>{props.name}</p>
        </button>
    )
}