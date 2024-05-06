import styles from "@/styles/Inventory.module.css";
import Link from "next/link";
import BottomNavigation from '@/components/BottomNavigation';
import CollectionCard from "@/components/CollectionCard";
import { useState } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Head from "next/head";

export default function Overview() {

    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
        <Head title="Overview" description="Overview of Clotho." />
             {isMenuOpen && <Navigation toggleMenu={toggleMenu} />}
            <main className={`${styles.chip} ${styles.carouselContainer}`}>
                <div className={styles.pageTitle}>
                    <div onClick={toggleMenu}>
                        <Image 
                            src={'/images/menu-burger.png'}
                            alt="Hamburger menu"
                            width={50}
                            height={35}
                            className={styles.menuIcon}
                        />
                    </div>
                    <h1 className={styles.title}>Collection</h1>
                    <Image 
                        src={'/images/user-light.png'}
                        alt="User icon"
                        width={35}
                        height={35}
                        className={styles.userIcon}
                    />
                </div>
                <div className={styles.mainContainer} >
                    <div className={styles.contentContainer}>
                        <CollectionCard
                            title="All Outfits"
                            largePhoto="/images/outfit/Casual_large.jpg"
                            topLeftPhoto="/images/outfit/Card_top1.jpg"
                            topRightPhoto="/images/outfit/Casual_top.jpg"
                            bottomLeftPhoto="/images/outfit/Card_bottom4.jpg"
                            bottomRightPhoto="/images/outfit/Office_top.jpg"
                        />
                        <CollectionCard
                            title="Summer Outfits"
                            largePhoto="/images/outfit/Card_large.jpg"
                            topLeftPhoto="/images/outfit/Card_top1.jpg"
                            topRightPhoto="/images/outfit/Card_top2.jpg"
                            bottomLeftPhoto="/images/outfit/Card_bottom1.jpg"
                            bottomRightPhoto="/images/outfit/Card_bottom2.jpg"
                        />
                        <CollectionCard
                            title="Party Outfits"
                            largePhoto="/images/outfit/Card_large2.jpg"
                            topLeftPhoto="/images/outfit/Card_top3.jpg"
                            topRightPhoto="/images/outfit/Card_top4.jpg"
                            bottomLeftPhoto="/images/outfit/Card_bottom3.jpg"
                            bottomRightPhoto="/images/outfit/Card_bottom4.jpg"
                        />
                    </div>
                </div>
            </main>

            <BottomNavigation
                bgColorCollection="var(--button-highlight-light)"
                pathColorCollection="var(--white)"
                borderStyle="60%"
                iconWidth={36}
                iconHeight={36}
            />
        </>
    )
}