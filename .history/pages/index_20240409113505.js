import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Navigation from "@/components/Navigation";
import Button from "@/components/Button";
import Link from "next/link";
import BottomNavigation from "@/components/BottomNavigation/index.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Clotho</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" 
        />
      </Head>
      <main className={`${styles.main}`}>
        {/* <Navigation /> */}

        <Link href='/QuizQuestions/QuestionsHome'>
          Take A Quiz
        </Link>

       
        <Navigation />

        <Button title="Next"/>
        <BottomNavigation 
          bgColorHome="var(--button-highlight-light)"
          pathColor="var(--white)"
          borderStyle="60%"
          IconWidth={90}
          iconHeight={36}
          navigation="var()"
        />

      </main>
    </>
  );
}
