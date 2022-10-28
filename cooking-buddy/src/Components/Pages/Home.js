import './Home.css';
import Button from './../CustomButton';
import apiHelper from '../../helpers/apiHelper';

function Home() {
    return (
        <main className="home">
            <h1>COOKING BUDDY</h1>
            <h1 className="subTitle">FIND YOUR PERFECT RECIPE</h1>
            <div className="split">
                <Button content="GET STARTED" clickEvent={apiHelper.test}></Button>
                <Button content="SHOW ALL RECIPES" path="/recipes"></Button>
            </div>

        </main>
    );
}

export default Home;