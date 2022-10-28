import React, { useState, useEffect } from "react";
import Cards from "../Card/Cards";
import Loading from "../Loading/Loading";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";

export default function Main() {
  const [usuarios, setUsers] = useState();
  const [isloading, setIsLoading] = useState(false);
  const [buscarUsuario, setBuscarUsuario] = useState();
  //Declarando variable de estado para guardar los valores del usuario buscado

  // obteniendo datos de la API
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => {
        setUsers(response);
        setBuscarUsuario(response);
        setIsLoading(true);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  // buscandor de datos

  const evento = (e) => {
    e.preventDefault();
  };
  const buscar = (text) => {
   let textMinusculas = text.toLowerCase();
    if (text.length >= 5) {
      let arrayFiltrados = usuarios.filter((usuario)=>{
        if(usuario.username.toLowerCase() === textMinusculas){
          return(usuario);
        }
      }

      );
      setBuscarUsuario(arrayFiltrados);
    } else {
       setBuscarUsuario(usuarios);
    }
  };

  return (
    <section style={{ backgroundColor: "#273142" , minHeight:"100vh" }}>
      <Container className="w-100 d-flex align-content-around flex-wrap justify-content-center">
        <Form
          className="w-100 p-4  d-flex justify-content-center"
          onSubmit={evento}
        >
          <Form.Group className="w-50">
            <Form.Control
              type="text"
              placeholder="Introducir Apellido"
              onChange={(e) => buscar(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-20 mx-3">
            Enviar
          </Button>
        </Form>

        <Row className="w-100">
          <h2 className="text-white text-center p-3">Usuarios:</h2>
          {isloading ? (
            buscarUsuario.map((user) => <Cards user={user}></Cards>)
          ) : (
            <Loading></Loading>

          )}
        </Row>
      </Container>
    </section>
  );
}
