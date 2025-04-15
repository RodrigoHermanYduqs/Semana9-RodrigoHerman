import './../App.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { LoginType } from '../../types/Login.type';
import conexao from '../../data/conexao';

export default function Login(){

    const parametros = useParams();
    const navigate = useNavigate();
  
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const limpaForm = () => {
        setEmail('')
        setSenha('')
    }

    const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        if (parametros.email && parametros.senha) {

            const dados : LoginType = { 
                email : parametros.email,
                senha: parametros.senha
            }

            conexao.post(`/login/${dados}`)
                .then(resposta => {
                    navigate('/listausuario')
                })
                .catch(erro => alert('Login não autorizado'))
        }

        limpaForm()
    }

  
    return(
        <>
        <header className="App-header">- Autenticação Necessária -</header>
        <div className="App">
          <form onSubmit={submeterForm}>
              <table>
                <tbody>
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
                        ></input>
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
                            value={senha}
                            onChange={evento => setSenha(evento.target.value)}
                        ></input>
                      </td>
                  </tr>
                </tbody>
              </table>
              <input type="submit" className="botao" value='< Continuar >'></input>
              <input type="button" className="botao" value='< Limpar >' onClick={() => limpaForm()}></input>
          </form>
       </div>
       </>
     );
}