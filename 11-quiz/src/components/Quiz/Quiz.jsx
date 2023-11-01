import { useState, useCallback, useRef } from 'react';
import classes from './Quiz.module.css'
import QUESTIONS from '../../questions.js'
import quizComplete from '../../assets/quiz-complete.png'
import QuestionTimer from './QuestionTimer';

const Quiz = () => {
    

    const shuffledAnswers = useRef();

    const [ answerState, setAnswerState ] = useState('');
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = answerState === '' ? userAnswers.length: userAnswers.length - 1;

    const quizCompleted = activeQuestionIndex === QUESTIONS.length

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setAnswerState('answered')
        setUserAnswers((prev) => {
            return [...prev, selectedAnswer]
        });

        setTimeout(()=> {
            if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]){
                setAnswerState('correct')
            }else {
                setAnswerState('wrong')
            }

            setTimeout(() => {
                setAnswerState('');
            },2000);

        }, 1000)
    }, 
    [activeQuestionIndex]);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

    if(quizCompleted){
        return (<>
            <div className={classes.summary}>
                <img src={quizComplete} alt='Quiz is complete' />
                <h2>Quiz completed</h2>
            </div>
        </>)
    }

    if(!shuffledAnswers.current){
        shuffledAnswers.current = [...QUESTIONS[activeQuestionIndex].answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5); 
        // Math.random will give you a random number between 0 and 1, 1 excluded
    }

    return(<>
    <div className={classes.quiz}>
        <div className={classes.question}>

            <QuestionTimer 
                key = {activeQuestionIndex}
                timeout={10000} 
                onTimeout={handleSkipAnswer} 
            />

            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul className={classes['answers-ul']}>
                {shuffledAnswers.current.map((item)=> {
                    
                    const isSelected = userAnswers[userAnswers.length - 1] === item

                    let cssClass = '';

                    if (answerState === 'answered' && isSelected){
                        cssClass = 'selected'};

                    if ((answerState === 'correct' || answerState === 'wrong') && isSelected){
                        cssClass = answerState};

                    return(
                        <li key={item} className='answer'>
                            <button onClick={()=> handleSelectAnswer(item)} className={cssClass}>
                                {item}
                            </button>
                        </li>);
                    })}
                </ul>
        </div>
    </div>
    </>)
};

export default Quiz;