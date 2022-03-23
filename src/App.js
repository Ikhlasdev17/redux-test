import axios from 'axios'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { productsFetched } from './actions/actions';

function App(props) {

  const products = useSelector(store => store.products)
  const basketItems = useSelector(store => store.basketItems)

  const dispatch = useDispatch()

  useEffect(() => {
    axios
    .get('https://jsonplaceholder.typicode.com/photos', {
      params: {
        _limit: 15
      }
    })
    .then(res => dispatch(productsFetched(res.data))) 
    .catch(err => console.log(err))

    //eslint-disable-next-line

    axios.get('https://api.pray.zone/v2/times/today.json?city=london')
    .then(res => console.log(res.data.results.datetime))
    
  }, [])


  const handleClick = (id) => {
    const currentEl = products.filter(item => item.id === id)[0] 

    const index = basketItems.findIndex(item => item.id === id) 

    console.log(index);

    if (index < 0) {
      dispatch({ type: "ADD_TO_BASKET", payload: currentEl }) 
    }
  }

  console.log(basketItems);


  return (
    <div className="App">
      <div>
        <Link to="/cart">
          <span className="link">Cart {basketItems.length}</span>
        </Link>
      </div>
      {products && products.map((item, index) => {
        return (
          <div className='item' key={index}>
            <img src={item.url} />
            <div className='content'>
              <h1>{item.title}</h1>
              <button className='btn' onClick={() => handleClick(item.id)}>Add To Cart</button>
            </div>
          </div>
        )
      })}
    </div>
  );
}



export default App;



