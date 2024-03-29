import styles from './Home.module.css';
import Button from '../Common/CustomButton';
import { useEffect } from 'react';

function Home() {
    
    // this effect is a kind of decent way to set background dynamicly without scoped css. 
    useEffect(() => {
        document.body.className = styles.body;
    }, []);
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>COOKING BUDDY</h1>
            <h1 className={[styles.title, styles.subTitle].join(" ")}>FIND YOUR PERFECT RECIPE</h1>
            <div className={styles.split}>
                <Button content="GET STARTED" path="/questionnaire"></Button>
                <Button content="SHOW ALL RECIPES" path="/recipes"></Button>
            </div>
        </main>
    );
}

export default Home;