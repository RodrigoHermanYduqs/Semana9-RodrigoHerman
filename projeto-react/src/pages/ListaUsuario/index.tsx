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
    const [listaUsuarios, setListaUsuarios] = useState<IUsuario[]>([]);

    useEffect(() => {
        conexao.get<IUsuario[]>('/usuarios')
            .then(resposta => setListaUsuarios(resposta.data))
    }, [])

    const navigate = useNavigate();

    const excluir = (usuarioExcluido: IUsuario) => {
        conexao.delete(`usuarios/${usuarioExcluido.id}`)
            .then(() => {
                const usuarios = listaUsuarios.filter(usuario => usuario.id !== usuarioExcluido.id)
                setListaUsuarios([...usuarios])
            })
    }

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
                            <th> </th>
                        </tr>
                    </thead>
                <tbody>
                    {listaUsuarios.map(item => (
                        <tr key={item.id}>
                            <td style={{textAlign: 'center', width: '40%'}}>              
                                <Link className='App-link' to={`/cadusuario/${item.id}`}>
                                    {item.id}
                                </Link></td>
                            <td style={{textAlign: 'center', width: '30%'}}>{item.nome}</td>
                            <td style={{textAlign: 'center', width: '20%'}}>{item.email}</td>
                            <td style={{textAlign: 'center', width: '20%'}}>
                                <button className='botao' onClick={() => excluir(item)}>{'< Excluir >'}</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                </table>
                <button className="botao" onClick={() => navigate(-1)}>{'< Voltar >'}</button>
            </div>
        </>
    );
}