import { useState } from 'react';
import classes from './Quiz.module.css'

const Quiz = () => {
    
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);

    return(<>
        <p>Currently Question</p>
    </>)
};

export default Quiz;