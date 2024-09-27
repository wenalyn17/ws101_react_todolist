function HandlingFunctions() {
    const HandleFunctions = () => {console.log('Hello There!')}
    return (
        <>
        <h1> This is how to handle events in functional Components </h1>
        <button onClick={HandleFunctions}>Click Me!</button>
        </>
    )
}

export default HandlingFunctions;