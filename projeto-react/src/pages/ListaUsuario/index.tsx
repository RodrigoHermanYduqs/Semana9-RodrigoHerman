import usuarios from './../../data/usuarios.data.json';
import { Link, useNavigate } from 'react-router-dom';
import './../App.css';

export default function ListaUsuario(){
    //const [lista, setLista] = useState(usuarios);
    const lista = usuarios;
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