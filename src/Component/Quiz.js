import React from 'react'
import '../CssCOMPO/Quiz.css';
import { QuizData } from '../Data/QuizData';
function Quiz() {
    return (
        <div>
            <p className='heading-txt'>Take your Quiz</p>
            <div className='container'>

                <div className='question'>
                    <span id='question-number'>1</span>
                    <span id='question-txt'>{QuizData[0].question}</span>
                </div>


                <div className='option-container'>
                    {QuizData[0].options.map((option, i) => {
                        return (
                            <button className='option-btn'>{option}</button>
                        )
                    })}
                </div>
                <input type='button' value='Next' id='next-button'></input>
            </div>
        </div>
    )
}

export default Quiz






