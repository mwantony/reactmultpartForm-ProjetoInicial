import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntrega({aoEnviar}) {
  const [cep, setCep] = useState('')
  const [endereco, setEndereco] = useState('')
  const [numero, setNumero] = useState('')
  const [estado, setEstado] = useState('')
  const [cidade, setCidade] = useState('')
  return (
    <form onSubmit={
      (event) => {
        event.preventDefault()
        aoEnviar({cep, endereco, numero, estado, cidade})
      }
    }>
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
        variant="outlined"
        margin="normal"
        id="cep"
        label="CEP"
        type="number"
      ></TextField>
      <TextField
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
        variant="outlined"
        fullWidth
        margin="normal"
        id="endereco"
        label="Endereço"
        type="text"
      ></TextField>
      <TextField
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value);
        }}
        variant="outlined"
        margin="normal"
        id="numero"
        label="Número"
        type="number"
      ></TextField>
      <TextField
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value);
        }}
        variant="outlined"
        margin="normal"
        id="estado"
        label="Estado"
        type="text"
      ></TextField>
      <TextField
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value);
        }}
        variant="outlined"
        margin="normal"
        id="cidade"
        label="Cidade"
        type="text"
      ></TextField>
      <Button variant="contained" fullWidth color="primary" type="submit">Finalizar Cadastro</Button>

      


      

    </form>
  );
}

export default DadosEntrega;
