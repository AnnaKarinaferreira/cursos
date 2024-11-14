import { useState } from 'react'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    idade:'',
    sexo:''
  });

  useEffect(() => {
    //carrega os usuarios ao montar o componente
    fetchUsuarios();

  }, []);

  const fetchUsuarios = async () => {
    try{
      //faz uma requisição GET para obter a lista de usuarios.
      const response = await axios.get(`http://localhost:3000/usuarios`);
      //atualiza o estado...
      setUsuarios(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleInputChange = e => {
    
  }
}