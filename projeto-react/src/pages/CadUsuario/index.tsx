import './../App.css';
//import { UsuarioType } from '../../types/Usuario.type'; // substitui o type por interface
//import usuarios from './../../data/usuarios.data.json'; // json estático
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import IUsuario from '../../types/IUsuario';
import conexao from '../../data/conexao';


export default function CadUsuario() {
  const parametros = useParams();
  const navigate = useNavigate();

  const [id, setId] = useState('')
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  useEffect(() => {
        if (parametros.id) {
            conexao.get<IUsuario>(`usuarios/${parametros.id}`)
                .then(resposta => {
                    setId(resposta.data.id)
                    setNome(resposta.data.nome)
                    setEmail(resposta.data.email)
                })
        }
    }, [parametros])

    const limpaForm = () => {
        setId('')
        setNome('')
        setEmail('')
        setSenha('')
    }

    const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        if (parametros.id) {
            conexao.put(`usuarios/${parametros.id}/`, {
                nome: nome,
                email: email,
                senha: senha
            }
            ).then(() => {
                    alert("Usuário atualizado com sucesso!")
            })
            .catch( erro => alert(erro.message))
        } else {
            conexao.post('usuarios/', {
                nome: nome,
                email: email,
                senha: senha
            })
            .then(() => {
                alert("Usuário cadastrado com sucesso!")
            })
            .catch( erro => alert(erro.message))
        }

        limpaForm()
    }

  return (
    <>
    <header className="App-header">
    - Cadastro de Usuarios - 
    </header>
    <div className="App">
       <form onSubmit={submeterForm}>
            <table>
                <tbody>
                <tr>
                    <td>
                        <label htmlFor="id">*ID:&nbsp;</label>
                    </td>
                    <td>
                        <input 
                            type="text" 
                            name="id" 
                            id="id" 
                            value={id}
                            onChange={evento => setId(evento.target.value)}
                        ></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="nome">
                            Nome:&nbsp;
                        </label>
                    </td>
                    <td>
                        <input 
                            type="text" 
                            name="nome" 
                            id="nome" 
                            value={nome}
                            onChange={evento => setNome(evento.target.value)}
                        >
                        </input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="email">
                            E-mail:&nbsp;
                        </label>
                    </td>
                    <td>
                        <input 
                            type="text" 
                            name="email" 
                            id="email" 
                            value={email}
                            onChange={evento => setEmail(evento.target.value)}
                        >
                        </input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="senha">
                            Senha:&nbsp;
                        </label>
                    </td>
                    <td>
                        <input 
                            type="password" 
                            name="senha" 
                            id="senha"
                            onChange={evento => setSenha(evento.target.value)}
                        >
                        </input>
                    </td>
                </tr>
                </tbody>
            </table>
            <input className='botao' type="submit" value='< Continuar >'></input>
            <input className='botao'type="button" value='< Limpar >' onClick={() => limpaForm()}></input>
            <button className="botao" onClick={() => navigate(-1)}>{'< Voltar >'}</button>
        </form>
    </div>
    </>
  );
}
