import React, { useEffect, useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuarios";
import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";

function FormularioCadastro({ aoEnviar }) {
  const [etapaAtual, setEtapaAtual] = useState(0)
  useEffect(() => {
    if(etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados)
    }
  })
  const formularios = [
    <DadosUsuario aoEnviar={coletarDados}></DadosUsuario>,
    <DadosPessoais aoEnviar={coletarDados}></DadosPessoais>, 
    <DadosEntrega aoEnviar={coletarDados}></DadosEntrega>,
    <Typography variant="h5">Obrigado pelo Cadastro!</Typography>
  ]
  const [dadosColetados, setDados] = useState({});

  function coletarDados(dados) {
    setDados({...dadosColetados, ...dados})
    console.log(dadosColetados)
    proximo()
  }


  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }


  return (



    
    <>
      <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Endereço</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );

}


export default FormularioCadastro;
