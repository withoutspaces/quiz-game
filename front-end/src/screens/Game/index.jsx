import { useState, useEffect } from "react";
import OptionButton from "../../components/OptionButton";
import Button from "../../components/Button";
import Title from "../../components/Title";
import Logo from '../../assets/logo2.png'
import api from "../../services/api";

import './styles.css'

export default function GameScreen() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [pointsCounter, setPointsCounter] = useState(0)
    const [alternatives, setAlternatives] = useState([])
    const [questions, setQuestions] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(false)

    let currentAnswer = ''

    useEffect(() => {
        getQuestions();
    }, [])

    const shuffle = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
        return arr;
    };

    function setUpAlternatives(questionsData) {
        console.log(questionsData);
        const answers = questionsData.map(result => [...result.incorrect_answers, result.correct_answer])
        const shuffledAnswers = answers.map(questionsAns => shuffle(questionsAns))
        setAlternatives(shuffledAnswers);
        setQuestions(questionsData)
        setLoaded(true)
    }

    async function getQuestions() {
        let questionsData = []
        await api
            .get('/questions')
            .then(response => {
                questionsData = response.data
                console.log(questionsData)
            })
            .catch(() => {
                setError(true)
            });

        setUpAlternatives(questionsData)

    }

    function verifySelectedAnswer(userResponse) {
        console.log(typeof userResponse);
        if (userResponse === '') {
            alert('Selecione uma opção')
            return
        }
        if (userResponse === questions[currentQuestion].correct_answer) {
            // todo - rigth answer modal
            alert("Reposta correta!")
            setCurrentQuestion(currentQuestion + 1)
            setPointsCounter(pointsCounter + 1)
            return
        }
        alert('Resposta errada')
        setCurrentQuestion(currentQuestion + 1)
        return
    }

    return (
        <section className="container">
            <div className="card-game">
                <img src={Logo} alt="logo data app" className="logo2" />

                {!loaded ?
                    <p>carregando...</p>
                    : error ?
                        <p>Opa, algo deu errado!<br /><strong>Tente Novamente</strong></p>
                        :
                        <div className="quiz-box">
                            <h4>Question {currentQuestion + 1} / 10</h4>
                            <Title
                                questionNumber={currentQuestion + 1}
                                title={questions[currentQuestion].description}
                            />
                            {alternatives[currentQuestion].map((res, key) => {
                                return (
                                    <Button
                                        key={key}
                                        value={res}
                                        handleAlternativeButton={() => currentAnswer = res}
                                    />
                                )
                            })}
                            <div className="option_btn">
                                <OptionButton
                                    handleOptionButton={() => verifySelectedAnswer(currentAnswer)}
                                    name='Confirm'
                                />
                                <OptionButton
                                    handleOptionButton={() => setCurrentQuestion(currentQuestion + 1)}
                                    name='Jump'
                                />
                            </div>
                        </div>
                }
            </div>
        </section>
    );
}