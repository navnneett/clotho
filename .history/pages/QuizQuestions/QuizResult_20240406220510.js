export default function QuizResult() {

    const results = [
        {Style1: "Bohemian: 5%"},
        {Style2: "Vintage: 15%"},
        {Style3: "Athletic: 20%"},
        {Style4: "Formal: 25%"},
        {Style5: "Casual: 30%"}
    ];

    return (
        <>
            <h4>Quiz Result</h4>
            <h3>
                Overall Fashion Styles:
                <ul>
                    {results.map((result, index) => (
                        <p key={index}>
                            {Object.values(result)}
                        </p>
                    ))}
                </ul>
            </h3>
        </>
    )
}