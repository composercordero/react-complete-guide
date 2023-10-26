import { useState } from 'react';
import classes from './Quiz.module.css'
import QUESTIONS from '../../questions.js'
import quizComplete from '../../assets/quiz-complete.png'

const Quiz = () => {
    
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    const quizCompleted = activeQuestionIndex === QUESTIONS.length

    const handleSelectAnswer = (selectedAnswer) => {
        setUserAnswers((prev) => {
            return [...prev, selectedAnswer]
        });
    };

    if(quizCompleted){
        return (<>
            <div className={classes.summary}>
                <img src={quizComplete} alt='Quiz is complete' />
                <h2>Quiz completed</h2>
            </div>
        </>)
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5); 
    // Math.random will give you a random number between 0 and 1, 1 excluded

    return(<>
    <div className={classes.quiz}>
        <div className={classes.question}>
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul className={classes['answers-ul']}>
                {shuffledAnswers.map((item)=> (
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