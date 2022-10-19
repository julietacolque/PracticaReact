import React, { useState, useEffect } from "react";
import Cards from "../Card/Cards";
import Loading from "../Loading/Loading";

export default function Main() {
  const [usuarios, setUsers] = useState();
  const [isloading , setIsLoading]=useState(false);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => {
        setUsers(response);
        setIsLoading(true);
      });
  };
  useEffect(()=>{
    getData()
  },[]);
 
  return( 
    <>
   <h1>Usuarios:</h1>
   {
   isloading?usuarios.map((user)=> <Cards user={user} ></Cards>):<Loading></Loading>
   }
   </>

  );
}
