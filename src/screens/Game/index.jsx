import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Title from "../../components/Title";
import Logo from  '../../assets/logo2.png'
import api from "../../services/api";

import './styles.css'
import ConfirmButton from "../../components/ConfirmButton";

export default function GameScreen() {
    const [questions, setQuestions] = useState({})
    const [alternatives, setAlternatives] = useState([])
    const [loaded, setLoaded] = useState(false)


    useEffect(() =>{
        getQuestions();
    }, [])

 
    async function getQuestions() {
        const response = await api.get('?amount=1&difficulty=easy&type=multiple')
        const questionsData = response.data.results
        const answers = questionsData.map(result => [...result.incorrect_answers, result.correct_answer])

        const shuffle = (arr) => {
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * i)
                const temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
            return arr;
        };

        const shuffledAnswers = answers.map(questionsAns => shuffle(questionsAns))

        console.log(shuffledAnswers, questionsData)
        setAlternatives(shuffledAnswers);
        setQuestions(questionsData)
        setLoaded(true)
    }

    return(
        <section className="container">
            <div className="card-game">          
                <img src={Logo} alt="logo data app" className="logo2" />

                {loaded ?
                    <div className="quiz-box">
                        <Title  
                            question_number={1}
                            title={questions[0].question}
                        />       
                        {alternatives[0].map((res) => {
                            console.log(alternatives)
                            return(
                                <Button 
                                    value={res}
                                    function={() => console.log('teste', res)}
                                />
                            )
                        })}
                        <ConfirmButton />
                    </div>
                :
                    <p>carregando...</p>
            }
            </div>
        </section>
    );
}