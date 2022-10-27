import { useRef, useState } from 'react'
import './style.css'
import logo from '../../assets/logo2.png'
import api from '../../services/api'

export default function Cadastar() {

  const descriptionRef = useRef()
  const correctAnswerRef = useRef()
  const incorrect1 = useRef()
  const incorrect2 = useRef()
  const incorrect3 = useRef()


  const postQuestion = (question) => {
    console.log(question);
    api
      .post('/questions/create', question)
      .then(response => {
        alert(response.data.message)

      })
      .catch(err => {
        console.log(err);
      })
    clearInputs()
  }

  const clearInputs = () => {
    descriptionRef.current.value = ""
    correctAnswerRef.current.value = ""
    incorrect1.current.value = ""
    incorrect2.current.value = ""
    incorrect3.current.value = ""
  }

  const handleSubmmit = e => {
    e.preventDefault()
    const formQuestion = {
      "description": descriptionRef.current.value,
      "correct_awnser": correctAnswerRef.current.value,
      "incorrect_awnsers": [incorrect1.current.value, incorrect2.current.value, incorrect3.current.value]
    }
    postQuestion(formQuestion)

  }


  return (
    <div className='container'>
      <div className="card">
        <img src={logo} alt="" className='logo_admin' />

        <form className="admin_container" onSubmit={handleSubmmit}>
          <h3>Cadastar Perguntas</h3>

          <div className="inputs">
            <label htmlFor="question">Pergunta</label>
            <input
              type="text"
              className='input'
              ref={descriptionRef}
              placeholder="Ex.: Qual a raiz de 144?"
              required
            />
          </div>

          <div className="inputs">
            <label htmlFor="right_alternative">Alternativa correta</label>
            <input
              type="text"
              className='input'
              ref={correctAnswerRef}
              placeholder="12"
              required
            />
          </div>

          <div className="inputs">
            <label htmlFor="question2">Opção 2</label>
            <input
              type="text"
              className='input'
              placeholder="72"
              required
              ref={incorrect1}
            />
          </div>

          <div className="inputs">
            <label htmlFor="question3">Opção 3</label>
            <input
              type="text"
              className='input'
              placeholder="14"
              required
              ref={incorrect2}
            />
          </div>

          <div className="inputs">
            <label htmlFor="question4">Opção 4</label>
            <input
              type="text"
              className='input'
              placeholder="2"
              required
              ref={incorrect3}
            />
          </div>

          <input type="submit" value="Cadastar" className='send_button' />
        </form>
      </div>
    </div>
  )
}