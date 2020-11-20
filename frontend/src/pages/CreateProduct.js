import React, { useState } from 'react';
import { createProduct } from '../services/RequestApi';

function CreateProduct() {
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState(0);
  const [unitaryValue, setUnitaryValue] = useState(0.00);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(productName, productQuantity, unitaryValue).then((res) => {
      if(!res.message) return window.location.href = "/";
      setError(res.message);
    });
  }

  return (
    <div className="container mt-4">
      <h2>Cadastrar Produto</h2>
      <div>
      <form method="POST" className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="row">
          <div className="col">
            <label htmlFor="productName">Nome do Produto</label>
            <input
              className="form-control"
              type="text"
              name="productName"
              id="productName"
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
              required
              placeholder={`Nome do Produto`}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <label htmlFor="productQuantity">Quantidade</label>
            <input
              className="form-control"
              type="number"
              name="productQuantity"
              id="productQuantity"
              onChange={(e) => setProductQuantity(e.target.value)}
              value={productQuantity}
              required
              placeholder={`Quantidade`}
            />
          </div>
          <div className="col">
            <label htmlFor="unitaryValue">Valor Unitário</label>
            <input
              className="form-control"
              type="number"
              name="unitaryValue"
              id="unitaryValue"
              onChange={(e) => setUnitaryValue(e.target.value)}
              value={unitaryValue}
              required
              placeholder={`Valor Unitário`}
            />
          </div>
        </div>
        <div
          id="checkoutFinalizeButton"
          className="d-flex align-items-center justify-content-center mt-5"
        >
          <input
            type="submit"
            value="Criar Produto"
            className="btn btn-lg btn-danger"
          />
        </div>
      </form>
      <p className="text-danger">{error}</p>
      </div>
      <a href="/">Voltar para a lista de produtos</a>
    </div>
  );
}

export default CreateProduct;