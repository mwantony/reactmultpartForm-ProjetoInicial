import { Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import ValidacoesCadastro from "../../contexts/validacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({aoEnviar}) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const validacoes = useContext(ValidacoesCadastro)
  
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if(possoEnviar()) {
        aoEnviar({email, senha});
      }
    }}>
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value)
        }}
        variant="outlined"
        fullWidth
        margin="normal"
        id="email"
        label="Email"
        required
        type="email"
      ></TextField>
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value)
        }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        name='senha'
        variant="outlined"
        required
        fullWidth
        margin="normal"
        id="senha"
        label="Senha"
        type="password"
      />
      <Button variant="contained" color="primary" type="submit">Próximo</Button>
    </form>
  );
}

export default DadosUsuario;
