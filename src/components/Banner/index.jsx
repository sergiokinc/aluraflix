import styled from "styled-components";
import banner from '../../assets/img/banner.png'
import { Boton, ContenidoParcial } from "../UI/Estilos";

const Anuncio = styled.div`
    background-image: linear-gradient(0deg, ${({theme}) => theme.oscuro} 0%, rgba(0,0,0,0) 100%),
    url(${banner});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

const AnuncioContenido = styled(ContenidoParcial)`
    height: 300px;
    @media screen and (min-width: 1024px) {
        height: 400px;
        display: flex;
        justify-content: space-between;
        padding: 5rem 0;
    }
`;

const AnuncioDescripcion = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    color: ${({theme}) => theme.texto};
    padding: 1rem 0;
    box-sizing: border-box;
    text-align: center;
    @media screen and (min-width: 1024px) {
        width: 40%;
        text-align: left;
        align-items: flex-start;
    }
`;

const AnuncioTitulo = styled.h1`
    font-size: ${({theme}) => theme.h1};
    font-weight: 700;
    margin-bottom: 1rem;
`;

const AnuncioDetalle = styled.p`
    display: none;
    @media screen and (min-width: 768px) {
        display: initial;
        margin-bottom: 1rem;
    }
    @media screen and (min-width: 1024px) {
    }
`;

const AnuncioLink = styled.a`
    display: none;
    @media screen and (min-width: 768px) {
        
    }
    @media screen and (min-width: 1024px) {
        display: initial;
        width: calc(40% - 1rem);
        height: auto;
        align-self: flex-end;
    }
`;

const AnuncioImagen = styled.img`
    width: 100%;
    @media screen and (min-width: 768px) {
        
    }
    @media screen and (min-width: 1024px) {

    }
`;

const AnuncioBoton = styled(Boton)`
    text-decoration: none;
    @media screen and (min-width: 1024px) {
        display: none;
    }
`;

export function Banner() {

    return (
        <Anuncio>
            <AnuncioContenido>
                <AnuncioDescripcion>
                    <AnuncioTitulo>Challenge React</AnuncioTitulo>
                    <AnuncioDetalle>Este desafío es una excelente oportunidad de aprendizaje, diseñada para que puedas comprometerte con la resolución de un problema real, aplicando todos los conocimientos adquiridos durante la formación en React.</AnuncioDetalle>
                    <AnuncioBoton tipo='completo' color='#fff' href="#" >Ver</AnuncioBoton>
                </AnuncioDescripcion>
                <AnuncioLink href="https://youtu.be/_ITiwPMUzho?si=k4NimCm_oO6ecrL1" target="__blank">
                    <AnuncioImagen src='https://cdn.pixabay.com/photo/2024/06/28/04/56/lo-fi-8858510_960_720.jpg' />
                </AnuncioLink>
            </AnuncioContenido>
        </Anuncio>
    );
}