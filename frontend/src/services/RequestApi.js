const deleteProduct = async (id) => {
    const deletedProduct = await fetch(`http://localhost:8080/products/${id}`, {
      method: 'DELETE',
    });
  
    return deletedProduct;
  };
  
  const createProduct = async (productName, itemQuantity, unitaryValue) => {
    const newProduct = await ( await fetch('http://localhost:8080/products/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productName, itemQuantity, unitaryValue }),
    })).json();
  
    return newProduct;
  };
  
  const updateProduct = async (id, productName, itemQuantity, unitaryValue) => {
    const updatedProduct = await ( await fetch(`http://localhost:8080/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, productName, itemQuantity, unitaryValue }),
    })).json();
  
    return updatedProduct;
  };

  const listAll = async () => {
    const productsList =  await ( await fetch(`http://localhost:8080/products/`) ).json();
    return productsList;
  };

  const listOne = async (id) => {
      return await ( await fetch(`http://localhost:8080/products/${id}`) ).json();
  };
  
  
  module.exports = {
    deleteProduct,
    createProduct,
    updateProduct,
    listAll,
    listOne,
  };