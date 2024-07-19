import {Helmet} from "react-helmet";
import Content from "./Content";

export default function PaginaInicial(){
    return (
        <div>
            <Helmet>
            <title>Página Inicial - Barbearia do Tim </title>
            </Helmet>
            <Content/>
        </div>
    )
}