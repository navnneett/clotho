import styles from "@/styles/QuizEnd.module.css";
import Button from "@/components/Button";
import Link from "next/link";
import QuizResult from "./QuizResult"; 
import Chart from './Chart';

const QuizEnd = ({ selectedAnswers = [] }) => {
    const calculateResult = (answers) => {
        console.log("Selected answers:", answers);

        const resultMapping = {
            'A': 'Classic and Relaxed', 
            'B': 'Trendy and Seasonable', 
            'C': 'Practical and Active',
            'D': 'Comfortable and Elegant',
        };

        if (answers.length === 0) {
            return 'Unknown'; // Default value if no answers are available
        }

        const lastAnswer = answers[answers.length - 1];
        return resultMapping[lastAnswer] || 'Unknown'; // Default if the key isn't in the mapping
    };

    const resultType = selectedAnswers.length > 0 
        ? selectedAnswers[selectedAnswers.length - 1]
        : null; // Ensure there's a value for `resultType`

    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
                <h1>Congratulations</h1>
                {resultType ? (
                    <>
                        <p>Your Ideal Outfit Type is {calculateResult(selectedAnswers)}</p>
                        <QuizResult resultType={resultType} />
                        <Chart resultType={resultType} />
                    </>
                ) : (
                    <p>No results to display.</p> // Fallback if no answer is available
                )}
                
                <div className={styles.finishButtonContainer}>
                    <Link href="/QuizQuestions/Chart">
                        <Button title="Finish" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default QuizEnd;

