import React, { useState, useEffect } from 'react';
import { listAll } from '../services/RequestApi';
import ProductsList from '../components/ProductsList';

function HomePage() {
  const [list, setList] = useState([]);

  useEffect(() => {
    listAll().then((data) => {
      setList(data)
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h2>Gerenciamento de Produtos</h2>
      </div>
      <div className="row mt-4">
        <div className="col">
          <h4>Lista de Produtos</h4>
        </div>
        <div className="col">
          <a href="/new">Cadastrar Novo Produto</a>
        </div>
      </div>

      <ProductsList list={list} />

    </div>
  );
}

export default HomePage;