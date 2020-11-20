import React from 'react';
import { deleteProduct } from '../services/RequestApi';

function ListTable({ list = [] }) {
  const handleDelete = (id) => {
    deleteProduct(id);

    window.location.href = '/';
  }
  
  if(list.length === 0) return <div className="m-5">Nenhum produto cadastrado.</div>
  return (
    <table className="table mt-2">
    <thead>
      <tr>
        <th scope="col">Nmome</th>
        <th scope="col">Quantidade</th>
        <th scope="col">Valor Unitário</th>
        <th scope="col">Ações</th>
      </tr>
    </thead>
    <tbody>
      
      {
        list && list.map(({ productName, itemQuantity, unitaryValue, id }, index) =>  
        <tr key={index}>
          <th><span data-testid="productName">{productName}</span></th>
          <td data-testid="itemQuantity">{itemQuantity}</td>
          <td data-testid="unitaryValue">R${unitaryValue}</td>
          <td>
            <a data-testid="editButton" href={`/edit/${id}`} className="m-1"><i className="fas fa-edit"></i></a>
            <a data-testid="deleteButton" href="#" onClick={() => handleDelete(id)} className="m-1">
              <i className="fas fa-trash-alt"></i>
            </a>
          </td>
        </tr>
        )
      }
      
    </tbody>
  </table>
  );
}

export default ListTable;