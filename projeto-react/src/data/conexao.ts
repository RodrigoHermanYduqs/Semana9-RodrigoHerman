import axios from "axios";

const conexao = axios.create({baseURL: 'http://localhost:3001'})

//const conexao = axios.create({baseURL: process.env.API_URL})

export default conexao;