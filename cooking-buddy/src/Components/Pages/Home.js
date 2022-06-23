import './Home.css';
import Button from './../CustomButton';

function Home() {
    return (
        <main className="home">
            <h1>COOKING BUDDY</h1>
            <h1 className="subTitle">FIND YOUR PERFECT RECIPE</h1>
            <div className="split">
                <Button content="GET STARTED"></Button>
                <Button content="SHOW ALL RECIPES"></Button>
            </div>

        </main>
    );
}

export default Home;