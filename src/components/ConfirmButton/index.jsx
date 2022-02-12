import Icon from "@mdi/react"
import { mdiCheckCircle } from '@mdi/js';

import './styles.css'


export default function ConfirmButton() {
    return (
        <div className="btn-container">
            <button type="button" className="btn-confirm">
                <Icon 
                    path={mdiCheckCircle}
                    name='check-circle'
                    size={1.5}
                    color='#ffffff'
                />
                <p>Confirm</p>
            </button>
        </div>
    )
}