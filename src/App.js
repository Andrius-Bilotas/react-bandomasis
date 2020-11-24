import React from 'react';
import ProductCardComponent from './components/ProductCardComponent';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <main className="container pt-5">
          <ProductCardComponent />
          
        </main>
      </div>
    );
  }
}

export default App;
