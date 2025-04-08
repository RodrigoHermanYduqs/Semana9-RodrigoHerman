import { ProdutoType } from '../../types/Produto.type';
import './../App.css';
import produtos from './../../data/produtos.data.json';
import { useParams, useNavigate } from 'react-router-dom';

export default function CadProduto(){
    const { id } = useParams();
    const navigate = useNavigate();
    let produtoSelecionado = produtos.find(item => item.id === id) as ProdutoType;
  
    if (!produtoSelecionado){
      produtoSelecionado = {
          id: '',
          nome: '',
          valor: 0,
          quantidadeDisponivel: 0,
          descricao: '',
          categoria: ''
      }       
    }
  
    return (
      <>
      <header className="App-header">
      - Cadastro de Produtos - 
      </header>
      <div className="App">
         <form>
              <table>
                  <tr>
                      <td>
                          <label htmlFor="labelProdutoId">*ID:&nbsp;</label>
                      </td>
                      <td>
                          <input type="text" name="id" id="id" value={produtoSelecionado.id} disabled></input>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <label htmlFor="labelProdutoNome">
                              Nome:&nbsp;
                          </label>
                      </td>
                      <td>
                          <input type="text" name="nome" id="nome" value={produtoSelecionado.nome} style={{width: '400px', textAlign: 'left'}}>
                          </input>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <label htmlFor="labelProdutoValor">
                              Valor:&nbsp;
                          </label>
                      </td>
                      <td>
                          <input type="text" name="valor" id="valor" value={produtoSelecionado.valor} style={{textAlign: 'right'}}>
                          </input>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <label htmlFor="labelProdutoQtde">
                              Quantidade:&nbsp;
                          </label>
                      </td>
                      <td>
                          <input type="text" name="quantidadeDisponivel" id="quantidadeDisponivel" value={produtoSelecionado.quantidadeDisponivel} style={{textAlign: 'right'}}>
                          </input>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <label htmlFor="labelProdutoDescricao">
                              Descrição:&nbsp;
                          </label>
                      </td>
                      <td>
                          <input type="text" name="descricao" id="descricao" value={produtoSelecionado.descricao} style={{width: '400px', height: '40px', textAlign: 'left'}}>
                          </input>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <label htmlFor="labelProdutoCategoria">
                              Categoria:&nbsp;
                          </label>
                      </td>
                      <td>
                          <input type="text" name="categoria" id="categoria" value={produtoSelecionado.categoria}>
                          </input>
                      </td>
                  </tr>
              </table>
              <input className="botao" type="submit" value='< Continuar >'></input>
              <input className="botao" type="button" value='< Limpar >' onClick={() => navigate('/cadproduto')}></input>
              <button className="botao" onClick={() => navigate(-1)}>{'< Voltar >'}</button>
          </form>
      </div>
      </>
    );
}