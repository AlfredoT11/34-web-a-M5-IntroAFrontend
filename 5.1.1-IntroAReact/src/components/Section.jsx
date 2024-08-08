import TituloComponent from "./TituloComponent";

const Section = ({ children, tituloMensaje }) => {

    return (
        <>
            <TituloComponent mensaje={tituloMensaje}></TituloComponent>
            {children}
        </>
    )
}

export default Section;