import { atom } from "recoil";
import IUsuario from "../interfaces/IUsuario";

export const listaUsuariosState = atom<IUsuario[]>({
    key: 'listaUsuarioState',
    default: []
})

