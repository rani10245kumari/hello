import React from 'react'
import '../CssCOMPO/ExamFirstP.css'
function ExamFirstPage() {
    return (
        <div>
            <h1 className='head'>Important Instructions Before Starting The Test !!</h1>
            <p className='instruction'>Instructions</p>
            <ul className='listing'>
                <li>Welcome to Online Exam for Technical Round</li>
                <li>Exam has Total 15 Questions</li>
                <li>Total Time for Exam is 30 Minute</li>
                <li>Don't Switch To Different Tab While Giving Test it Will Determined as Doing
                    Malcious Activity and Hence it Will Terminate The Candidate Auotomatically</li>
                <li>Negative Marking Exam : <span className='no'>NO</span></li>
            </ul>
            <p className='wish'>Best Of Luck For Your Exam</p>
            <button className='butn'>START</button>

        </div>
    )
}

export default ExamFirstPage
