import './../App.css';
import usuarios from './../../data/usuarios.data.json';
import { useParams, useNavigate } from 'react-router-dom';

export default function CadUsuario() {
  const { id } = useParams();
  const navigate = useNavigate();
  let usuarioSelecionado = usuarios.find(item => item.id === id);

  if (!usuarioSelecionado){
    usuarioSelecionado = {
        id: '',
        nome: '',
        email: ''
    }       
  }

  return (
    <>
    <header className="App-header">
    - Cadastro de Usuarios - 
    </header>
    <div className="App">
       <form>
            <table>
                <tr>
                    <td>
                        <label htmlFor="labelUsuarioId">*ID:&nbsp;</label>
                    </td>
                    <td>
                        <input type="text" name="id" id="id" value={usuarioSelecionado.id} disabled></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="labelUsuarioNome">
                            Nome:&nbsp;
                        </label>
                    </td>
                    <td>
                        <input type="text" name="nome" id="nome" value={usuarioSelecionado.nome}>
                        </input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="labelUsuarioEmail">
                            E-mail:&nbsp;
                        </label>
                    </td>
                    <td>
                        <input type="text" name="email" id="email" value={usuarioSelecionado.email}>
                        </input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="labelUsuarioSenha">
                            Senha:&nbsp;
                        </label>
                    </td>
                    <td>
                        <input type="password" name="senha" id="senha">
                        </input>
                    </td>
                </tr>
            </table>
            <input type="submit" value='Continuar'></input>
            <input type="button" value='Limpar' onClick={() => navigate('/cadusuario')}></input>
        </form>
    </div>
    </>
  );
}
