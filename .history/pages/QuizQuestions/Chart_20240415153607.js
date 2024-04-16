import styles from "../../styles/Chart.module.css";
import React, { useEffect, useState } from "react";
import { RadialBarChart, RadialBar, Legend, Tooltip, Label, ResponsiveContainer } from "recharts";
import Button from "@/components/Button";
import Link from "next/link";


export default function Chart({ resultType }) {
    console.log("Received resultType:", resultType);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        console.log("useEffect triggered with resultType:", resultType);
    }, [resultType]);
    
    const dataA = [
        { name: "Bohemian", Percentage: 5, pv: 5, fill: "var(--chart-color-cyan)" },
        { name: "Vintage", Percentage: 15, pv: 15, fill: "var(--chart-color-light-purple)" },
        { name: "Athletic", Percentage: 20, pv: 20, fill: "var(--chart-color-bright-purple)" },
        { name: "Formal", Percentage: 25, pv: 25, fill: "var(--chart-color-blue)" },
        { name: "Casual", Percentage: 30, pv: 30, fill: "var(--chart-color-purple)" }
    ];

    const dataB = [
        { name: "Alternative", Percentage: 10, pv: 10, fill: "var(--chart-color-cyan)" },
        { name: "Gothic", Percentage: 20, pv: 20, fill: "var(--chart-color-light-purple)" },
        { name: "Seasonal", Percentage: 25, pv: 25, fill: "var(--chart-color-bright-purple)" },
        { name: "Trend Setter", Percentage: 30, pv: 30, fill: "var(--chart-color-blue)" },
        { name: "Electric", Percentage: 15, pv: 15, fill: "var(--chart-color-purple)" }
    ];

    const dataC = [
        { name: "Bobo-Chic", Percentage: 5, pv: 5, fill: "var(--chart-color-cyan)" },
        { name: "Romantic", Percentage: 15, pv: 15, fill: "var(--chart-color-light-purple)" },
        { name: "Minimalist", Percentage: 20, pv: 20, fill: "var(--chart-color-bright-purple)" },
        { name: "Athletic", Percentage: 25, pv: 25, fill: "var(--chart-color-blue)" },
        { name: "Pratical", Percentage: 30, pv: 30, fill: "var(--chart-color-purple)" }
    ];

    const dataD = [
        { name: "Edgy", Percentage: 10, pv: 10, fill: "var(--chart-color-cyan)" },
        { name: "Retro", Percentage: 20, pv: 20, fill: "var(--chart-color-light-purple)" },
        { name: "Comfortable", Percentage: 25, pv: 25, fill: "var(--chart-color-bright-purple)" },
        { name: "Elegant", Percentage: 30, pv: 30, fill: "var(--chart-color-blue)" },
        { name: "Chic", Percentage: 15, pv: 15, fill: "var(--chart-color-purple)" }
    ];

    
    let dataToShow;
    switch (resultType) {
        case "A":
            console.log("Setting dataToShow to dataA");
            dataToShow = dataA;
            break;
        case "B":
            console.log("Setting dataToShow to dataB");
            dataToShow = dataB;
            break;
        case "C":
            console.log("Setting dataToShow to dataC");
            dataToShow = dataC;
            break;
        case "D":
            console.log("Setting dataToShow to dataD");
            dataToShow = dataD;
            break;
        default:
            console.log("Setting dataToShow to default dataA");
            dataToShow = dataA;
            break;
    }

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
          return (
            <div className="tooltip">
             <p className="tooltipLabel">{`$${payload[0].payload?.price}`}</p>
             <p className="tooltipDesc">{`${payload[0]?.payload?.date}`}</p>
            </div>
          )
         }
      
        return null
      }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.questionAnalysis}>
                    <div className={styles.chart}>
                        <h4 className={styles.chartTitle}>Styles That Suit You Best</h4>
                        {isClient && 
                        <ResponsiveContainer width={400} height={300}>
                            <RadialBarChart  
                                innerRadius="10%" 
                                outerRadius="80%" 
                                data={dataToShow} 
                                startAngle={180} 
                                endAngle={0}
                                cx={140}
                                cy={170}
                            >
                                <RadialBar minAngle={15} label={{ fill: 'var(--button-linear-light)', position: 'insideStart' }} background clockWise={true} dataKey='Percentage' />
                                <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right"/>
                                <Tooltip content={CustomTooltip}/>
                            </RadialBarChart>
                            </ResponsiveContainer>}
                    </div>
                    <div className={styles.mainContents}>
                        <h3 className={styles.analysisTitle}>Approach to Fashion</h3>
                        <p>Lean towards timeless and classic styles, indicating a preference for enduring elegance and versatility in your wardrobe choices.</p>
                        <h3 className={styles.analysisTitle}>Priority When Shopping for Clothes</h3>
                        <p>Comfort and fit are your primary concerns, suggesting a practical approach to fashion that prioritizes ease of wear.</p>
                        <h3 className={styles.analysisTitle}>Types of Events for Dressing Up</h3>
                        <p>Dress up for casual outings with friends, indicating a preference for relaxed and informal settings where comfort and style can coexist effortlessly.</p>
                        <h3 className={styles.analysisTitle}>Wardrobe Organization</h3>
                        <p>Organizes their wardrobe primarily by clothing type approaches to organizing Your fashion essentials.</p>
                        <h3 className={styles.analysisTitle}>Challenges in Choosing Outfits</h3>
                        <p>Finding the right fit and balancing comfort with fashion, suggesting comfortable wearing.</p>
                    </div>
                </div>
                <div className={styles.questionAnalysis}>
                    <h2 className={styles.subTitle} id="space">Fashion Trend Recommendations</h2>
                    <ul>
                        <li className={styles.jean}>Invest in timeless pieces: tailored blazers, crisp button-down shirts, and well-fitted denim jeans</li>
                        <li className={styles.dress}>Choose comfortable dress-ups: relaxed-fit trousers, oversized knitwear, and flowy midi dresses</li>
                        <li className={styles.tShirt}>Prepare versatile essentials: striped tops, camel coats, and black ankle boots</li>
                        <li className={styles.shoes}>Incorporate personalized touches: custom monogramming, and handmade jewelry</li>
                    </ul>
                </div>
            </div>
            
            
        </div>
    );
}
