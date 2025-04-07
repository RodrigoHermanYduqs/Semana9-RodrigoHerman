
export default function Login(){
    return(
        <>
        <header className="App-header">- Autenticação Necessária -</header>
        <div className="App">
          <form>
              <table>
                <tbody>
                  <tr>
                      <td>
                          <label htmlFor="labelUsuarioEmail">
                              E-mail:&nbsp;
                          </label>
                      </td>
                      <td>
                          <input type="text" name="email" id="email">
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
                </tbody>
              </table>
              <input type="submit" value='Continuar'></input>
              <input type="reset" value='Limpar'></input>
          </form>
       </div>
       </>
     );
}