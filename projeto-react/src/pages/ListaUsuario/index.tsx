//import usuarios from './../../data/usuarios.data.json'; // json estático
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './../App.css';
import IUsuario from '../../types/IUsuario';
import conexao from '../../data/conexao';

export default function ListaUsuario(){
    // recupera o JSON ESTÁTICO
    //const [lista, setLista] = useState<IUsuario[]>(usuarios) // usando state com interface 
    //const [lista, setLista] = useState<UsuarioType[]>(usuarios) // usando state com TYPE em vez de interface
    //const lista = usuarios; // estático 

    // recupera via API 
    const [lista, setLista] = useState<IUsuario[]>([]);

    useEffect(() => {
        conexao.get<IUsuario[]>('/usuarios')
            .then(resposta => setLista(resposta.data))
    }, [])

    const navigate = useNavigate();

    return(
        <>
            <header className='App-header'>- Lista de Usuários - </header>
            <div className='App'>
                <table style={{width: '70%'}} border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>EMAIL</th>
                        </tr>
                    </thead>
                <tbody>
                    {lista.map(item => (
                        <tr key={item.id}>
                            <td style={{textAlign: 'center', width: '40%'}}>              
                                <Link className='App-link' to={`/cadusuario/${item.id}`}>
                                    {item.id}
                                </Link></td>
                            <td style={{textAlign: 'center', width: '40%'}}>{item.nome}</td>
                            <td style={{textAlign: 'center', width: '20%'}}>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
                <button className="botao" onClick={() => navigate(-1)}>{'< Voltar >'}</button>
            </div>
        </>
    );
}