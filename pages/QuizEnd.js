import styles from "@/styles/Chart.module.css";
import React from "react";
import Button from "@/components/Button";
import Link from "next/link";
import QuizResult from "@/pages/QuizResult"; 
import Chart from "@/pages/Chart"; 

const QuizEnd = ({ selectedAnswers = [] }) => {
    
    const safeSelectedAnswers = Array.isArray(selectedAnswers) ? selectedAnswers : [];

   
    const calculateResult = (answers) => {
        console.log("Selected answers:", answers);

        const resultMapping = {
            'A': 'Classic and Relaxed',
            'B': 'Trendy and Seasonable',
            'C': 'Practical and Active',
            'D': 'Comfortable and Elegant',
        };

       
        const lastAnswer = safeSelectedAnswers.length > 0 ? safeSelectedAnswers[safeSelectedAnswers.length - 1] : null;
        
        return resultMapping[lastAnswer] || "Unknown";
    };

    
    const resultType = safeSelectedAnswers.length > 0 ? safeSelectedAnswers[safeSelectedAnswers.length - 1] : "Unknown";

    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
                <h1>Congratulations</h1>

                <p>Your Ideal Outfit Type is {calculateResult(safeSelectedAnswers)}</p>

                {/* Only render if resultType is valid */}
                {resultType !== "Unknown" && (
                    <>
                        <QuizResult resultType={resultType} />
                        <Chart resultType={resultType} />
                    </>
                )}

                
                {resultType === "Unknown" && (
                    <p>Unable to determine your ideal outfit type. Please check your answers.</p>
                )}

                <div className={styles.buttonPosition}>
                    <Link href={'/'}>
                        <Button title="Finish" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default QuizEnd;


};

export default QuizEnd;

