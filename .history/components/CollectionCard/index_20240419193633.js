import styles from './CollectionCard.module.css'
import Image from "next/image"
import Link from "next/link"

export default function CollectionCard({
    title = "",
    largePhoto="",
    topLeftPhoto="",
    topRightPhoto="",
    bottomLeftPhoto="",
    bottomRightPhoto="",
    altOne,
    altTwo,
    altThree,
    altFour,
    altFive
}) {

    return(
        <>
            <div className={styles.cardHolder}>
                <div className={styles.photoHolder}>
                    <Image 
                        src={largePhoto}
                        alt={altOne}
                        width={185}
                        height={200}
                        className={styles.large}
                    />
                    <div className={styles.smallBox}>
                        <div className={styles.quater}>
                            <div className={styles.pair}>
                                <Image 
                                    src={topLeftPhoto}
                                    alt={altTwo}
                                    width={90}
                                    height={95}
                                    className={styles.topSmall}
                                />
                                <Image 
                                    src={topRightPhoto}
                                    alt={altThree}
                                    width={90}
                                    height={95}
                                    className={styles.topSmall}
                                />
                            </div>
                            <div className={styles.pair}>
                                <Image 
                                    src={bottomLeftPhoto}
                                    alt={altFour}
                                    width={90}
                                    height={95}
                                    className={styles.bottomSmall}
                                />
                                <Image 
                                    src={bottomRightPhoto}
                                    alt={altFive}
                                    width={90}
                                    height={95}
                                    className={styles.large}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.textHolder}>
                    <div className={styles.name}>
                        {title}
                    </div>
                    <Image 
                        src={'/images/next-light.png'}
                        alt="next arrow"
                        width={40}
                        height={55}
                    />
                </div>
            </div>
        </>
    )
}



