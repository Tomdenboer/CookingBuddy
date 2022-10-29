import styles from './Home.module.css';
import Button from '../Common/CustomButton';
import apiHelper from '../../helpers/apiUtils';

function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>COOKING BUDDY</h1>
            <h1 className={[styles.title, styles.subTitle].join(" ")}>FIND YOUR PERFECT RECIPE</h1>
            <div className={styles.split}>
                <Button content="GET STARTED" clickEvent={apiHelper.test}></Button>
                <Button content="SHOW ALL RECIPES" path="/recipes"></Button>
            </div>

        </main>
    );
}

export default Home;