import './App.css';
import { Link } from "react-router-dom";
//import { Book, CartModel } from './types';
import { BooksContext } from './App';
import { useContext } from 'react';


// export interface State { 
//     cart: CartModel, 
//     books: Book[],
//     // addToCart: Function
// }

const Products = () => { 
  const context = useContext(BooksContext)
    //console.log("CONTEXT.books:",context.state.books);
    //onsole.log("CONTEXT.addToCart:",context.addToCart);
    //console.log("CONTEXT:",context.state);


  return (      
    <div>
      <h3>
        <span style={{padding:"0 0 0 10px"}}>Products</span>
        <div style={{float:"right", padding:"0 10px 0 0"}}>
        <Link to="/cart">My Cart({ context.state.cart.items.reduce((total, item) => (total += item.count), 0 )})</Link>
        </div>
      </h3>
      <div>
        {context.state.books.map(book => (
          <div className="book">
            <img src={book.image} alt={book.name} />
              <div className="bookContent"  key={book.id}>
                <h4>{book.name}</h4>
                <p>Price: {book.price}£</p>
                <p>Author: {book.author}</p>
                <button onClick={()=> context.addToCart(book)}>Add to Cart</button>
              </div>
          </div>
        ))}
    </div>
    </div>
  );
}


export default Products ;
