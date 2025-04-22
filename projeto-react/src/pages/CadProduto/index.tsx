import './../App.css';
//import { ProdutoType } from '../../types/Produto.type'; // substitui o type por interface
//import produtos from './../../data/produtos.data.json'; // json estático
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import conexao from '../../data/conexao';
import IProduto from '../../interfaces/IProduto';

export default function CadProduto(){
    const parametros = useParams();
    const navigate = useNavigate();

    const [id, setId] = useState('')
    const [nome, setNome] = useState('')
    const [valor, setValor] = useState('0')
    const [quantidadeDisponivel, setQuantidadeDisponivel] = useState('0')
    const [descricao, setDescricao] = useState('')
    const [categoria, setCategoria] = useState('')

    useEffect(() => {
        if (parametros.id) {
            conexao.get<IProduto>(`produtos/${parametros.id}`)
                .then(resposta => {
                    setId(resposta.data.id)
                    setNome(resposta.data.nome)
                    setValor(resposta.data.valor.toString())
                    setQuantidadeDisponivel(resposta.data.quantidadeDisponivel.toString())
                    setDescricao(resposta.data.descricao)
                    setCategoria(resposta.data.categoria)
                })
        }
    }, [parametros])
  
    const limpaForm = () => {
        setId('')
        setNome('')
        setValor('0')
        setQuantidadeDisponivel('0')
        setDescricao('')
        setCategoria('')
    }

    const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        console.log('valor = ' + valor + ' quantidadeDisponivel = ' + quantidadeDisponivel)

        if (parametros.id) {
            conexao.put(`produtos/${parametros.id}`, {
                nome: nome,
                valor: Number(valor),
                quantidadeDisponivel: Number(quantidadeDisponivel),
                descricao: descricao,
                categoria: categoria
            }
            ).then(() => {
                    alert("Produto atualizado com sucesso!")
            })
            .catch( erro => alert(erro.message))
        } else {
            conexao.post('produtos', {
                nome: nome,
                valor: Number(valor),
                quantidadeDisponivel: Number(quantidadeDisponivel),
                descricao: descricao,
                categoria: categoria
            })
            .then(() => {
                alert("Produto cadastrado com sucesso!")
            })
            .catch( erro => alert(erro.message))
        }

        limpaForm()
    }
  
    return (
      <>
      <header className="App-header">
      - Cadastro de Produtos - 
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
                            onChange={evento => setId(evento.target.value)}></input>
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
                            style={{width: '400px', textAlign: 'left'}}
                            onChange={evento => setNome(evento.target.value)}>
                          </input>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <label htmlFor="valor">
                              Valor:&nbsp;
                          </label>
                      </td>
                      <td>
                          <input 
                            type="text" 
                            name="valor" 
                            id="valor" 
                            value={valor} 
                            style={{textAlign: 'right'}}
                            onChange={evento => setValor(evento.target.value)}>
                          </input>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <label htmlFor="quantidadeDisponivel">
                              Quantidade:&nbsp;
                          </label>
                      </td>
                      <td>
                          <input 
                            type="text" 
                            name="quantidadeDisponivel" 
                            id="quantidadeDisponivel" 
                            value={quantidadeDisponivel} 
                            style={{textAlign: 'right'}}
                            onChange={evento => setQuantidadeDisponivel(evento.target.value)}
                            >
                          </input>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <label htmlFor="descricao">
                              Descrição:&nbsp;
                          </label>
                      </td>
                      <td>
                          <input 
                            type="text" 
                            name="descricao" 
                            id="descricao" 
                            value={descricao} 
                            style={{width: '400px', height: '40px', textAlign: 'left'}}
                            onChange={evento => setDescricao(evento.target.value)}>
                          </input>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <label htmlFor="categoria">
                              Categoria:&nbsp;
                          </label>
                      </td>
                      <td>
                          <input 
                            type="text" 
                            name="categoria" 
                            id="categoria" 
                            value={categoria}
                            onChange={evento => setCategoria(evento.target.value)}>
                          </input>
                      </td>
                  </tr>
                  </tbody>
              </table>
              <input className="botao" type="submit" value='< Continuar >'></input>
              <input className="botao" type="button" value='< Limpar >' onClick={() => limpaForm()}></input>
              <button className="botao" onClick={() => navigate(-1)}>{'< Voltar >'}</button>
          </form>
      </div>
      </>
    );
}