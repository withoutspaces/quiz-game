import api from "../../services/api";
import { useState } from "react";

export default function GameScreen() {
    const [questions, setQuestions] = useState({})

    function getQuestions() {
        api
        .get('amount=10&category=9&difficulty=easy')
        .then((response) => {
            setQuestions(response.data)
            console.log(questions)
            })
        .catch((err) => alert('opss...' + err))
    }

    return(
        <div>
            <h1>teste</h1>
        </div>
    );
}