import React, { useState } from "react";

function Formulario(){
    return(
        <form>
            <p> -- USUÁRIO -- </p>
            <table>
                <tr>
                    <td>
                        <label htmlFor="labelUsuarioId">*ID:&nbsp;</label>
                    </td>
                    <td>
                        <input type="text" name="id" id="id" required></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="labelUsuarioNome">
                            Nome:&nbsp;
                        </label>
                    </td>
                    <td>
                        <input type="text" name="nome" id="nome">
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
            </table>
            <input type="submit"></input>
            <input type="reset"></input>
        </form>
    );
}

export default Formulario;