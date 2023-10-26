import { useState } from 'react';
import classes from './Quiz.module.css'
import QUESTIONS from '../../questions.js'

const Quiz = () => {
    
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    const handleSelectAnswer = (selectedAnswer) => {
        setUserAnswers((prev) => {
            return [...prev, selectedAnswer]
        });
    };

    return(<>
    <div className={classes.quiz}>
        <div className={classes.question}>
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul className={classes['answers-ul']}>
                {QUESTIONS[activeQuestionIndex].answers.map((item)=> (
                    <li key={item} className={classes.answer}>
                        <button onClick={()=> handleSelectAnswer(item)}>
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    </>)
};

export default Quiz;