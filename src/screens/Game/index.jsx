import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Title from "../../components/Title";
import Logo from  '../../assets/logo2.png'
import api from "../../services/api";

import './styles.css'

export default function GameScreen() {
    const [questions, setQuestions] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        getQuestions()
    }, [])

    function getQuestions() {
        api
        .get('?amount=1&category=9&difficulty=easy&type=multiple')
        .then((response) => {
            setQuestions(response.data)
            setLoaded(true)
            console.log(questions)
            })
        .catch((err) => alert('opss...' + err))
    }

    return(
        <section className="container">
            <div className="card-game">
                <img src={Logo} alt="logo data app" className="logo2" />
                {loaded ?
                    <div className="quiz-box">
                        <Title  
                            question_number={1}
                            title='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."'
                        />         
                        <Button value='Lorem ipsum dolor'/>
                        <Button value='Lorem ipsum dolor'/>
                        <Button value='Lorem ipsum dolor'/>
                        <Button value='Lorem ipsum dolor'/>
                    </div>
                :
                    <p>carregando...</p>
            }
            </div>
        </section>
    );
}