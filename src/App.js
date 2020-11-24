import React from 'react';
import ProductCardComponent from './components/ProductCardComponent';
import ProductList from './components/ProductList';
import Product from './components/Product';

const productList = new ProductList();
productList.add(new Product("Duona", "", "", 0.99, 5));
productList.add(new Product("Lempa", "", "", 11.59, 3));
productList.add(new Product("Garsiakalbis", "", "", 59.99, 2));
productList.add(new Product("Monitorius", "", "", 99.99, 1));
productList.add(new Product("Klaviatura", "", "", 17.58, 1));
console.log(productList);

let sum = productList.getList().reduce((acc,elem) => {
  return acc + (elem.price * elem.quantity);
}, 0);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <main className="container pt-5">
          <div className="row">
            {productList.getList().map((product, index) => {
              return (
                <div className="col-4 border" key={index}>
                  <p>Pavadinimas: { product.title }</p>
                  <p>Kaina: { product.price }</p>
                  <p>Kiekis: { product.quantity }</p>
                </div>
              )
            })}
          </div>
          <div className="row pt-5">
            {productList.getList().filter(product => {return product.price > 50 }).map((product, index) => {
              return (
                <div className="col-4 border" key={index}>
                  <p>Pavadinimas: { product.title }</p>
                  <p>Kaina: { product.price }</p>
                  <p>Kiekis: { product.quantity }</p>
                </div>
              )
            })}
          </div>
          <div className="row pt-5">
            {sum}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
