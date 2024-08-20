const TitleH1Component = ({ titulo }) => {

    const myStyles = {
        /*
        color: 'red', 
        backgroundColor: 'green'
        */
    }

    return (
        <>
            <h1 style={myStyles} >{titulo}</h1>
            <hr></hr>
        </>
    )
}

const TitleH2Component = ({ titulo }) => {
    return (
        <>
            <h2>{titulo}</h2>
            <hr></hr>
        </>
    )
}

const TitleH3Component = ({ titulo }) => {
    return (
        <>
            <h3>{titulo}</h3>
            <hr></hr>
        </>
    )
}

const TitleH4Component = ({ titulo }) => {
    return (
        <>
            <h4>{titulo}</h4>
            <hr></hr>
        </>
    )
}


export { TitleH1Component, TitleH2Component, TitleH3Component }
export default TitleH4Component;