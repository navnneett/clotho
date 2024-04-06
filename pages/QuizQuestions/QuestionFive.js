import React, { useState } from "react";
import styles from "../../styles/QuestionFive.module.css";
import Button from "@/components/Button";
import ButtonTwo from "@/components/ButtonTwo";
import Image from "next/image";

export default function QuestionFive({ onNextQuestion }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswerSelection = (answer) => {
        setSelectedAnswer(answer);
    }

    const handleNextQuestion = () => {
        onNextQuestion(selectedAnswer); 
    }

    return (
        <>
         <div className={styles.mainContainer}>
                    <Image
                    src="/images/quiz/Progress Indicator-4.png"
                    alt="Progress Indicator question 5"
                    width={430} 
                    height={10}
                    className={styles.imageOne}
                />
                <div className={styles.contentContainer}>
                    
                    <div className={styles.optionContainer}>
                    <p className={styles.openSansText}>What kind of events do you typically dress up for?</p>
                        <div className={styles.optionRowOne}>
                            <ButtonTwo onClick={() => handleAnswerSelection('A')} title="Option A" className={styles.optionRowInnerOne}/>
                            <ButtonTwo onClick={() => handleAnswerSelection('B')} title="Option B" className={styles.optionRowInnerTwo}/>
                        </div>
                        <div className={styles.optionRowTwo}>
                            <ButtonTwo onClick={() => handleAnswerSelection('C')} title="Option C" className={styles.optionRowInnerThree}/>
                            <ButtonTwo onClick={() => handleAnswerSelection('D')} title="Option D" className={styles.optionRowInnerFour}/>
                        </div>
                   
                        <div className={styles.nextButtonContainer}>
                        {selectedAnswer !== null && (
                            <Button onClick={handleNextQuestion} title="Next" className={styles.nextButton} />
                        )}
                        </div>
                    </div>
                    
                </div>
                    </div>
        </>
    );
}
