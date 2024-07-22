export default function Footer(){
    return (
    <div className="footer" style={{display: "flex"}}>
        <div className="institucional">
            <h2>INSTITUCIONAL</h2>
            <p>Sobre</p>
            <p>Serviços</p>
            <p>Politica de Privacidade</p>
        </div>
        
        <div className="atendimento" >
            <h2>ATENDIMENTO</h2>
            <p>Telefone</p>
            <p>(51)9999-9999</p>
            <p>Horário de Funcionamento</p>
            <p>Seg. à Sex. das 09h às 22h</p>
            <p>Contato</p>
            <a href="">contato@barbearia_tim.com.br</a>
        </div>

        <div className="minhaconta" style={{display: "flex", flexDirection: "column"}}>
            <h2>MINHA CONTA</h2>
            <a href="/perfil">Minha conta</a>
            <a href="/agendamentos">Meus Agendamentos</a>
        </div>

        <div className="redessociais" style={{display: "flex", flexDirection: "column"}}>
            <h2>REDES SOCIAIS</h2>
            <a href="">Instagram</a>
            <a href="">Linkedin</a>
            <a href="">GitHub</a>
        </div>
    </div>
        
        
    )
}

