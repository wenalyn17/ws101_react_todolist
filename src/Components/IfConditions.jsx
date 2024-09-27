function MissedGoal() {
    return<h3>Kitty Chubby</h3>

}

function MadeGoal() {
    return <h3>Kitty!!!</h3>

}

function Kitty(props) {
    const isGoal = props.isGoal;


    if (isGoal) {
        return <MadeGoal />;
    }
    return <MissedGoal />
}

export default Kitty;