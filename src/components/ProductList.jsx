import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productAction';

function ProductListPage() {
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.product)
  console.log('products in components', products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  return products.length === 0 ? (<>...Loading</>): (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gap: 20
    }}>{
      products.map((product) => {
        const {id, image, title, price, description} = product;
        return (
          <div key={id} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid black',
            borderRadius: 10,
            overflow: 'hidden',
            padding: 10,
          }}>
            <img src={image} alt="" style={{
              width: 200,
              height: 200,
            }}/>
            <h1>{title}</h1>
            <p>{price}</p>
            <p>{description}</p>
          </div>
        )
      })
      }</div>
  )
}

export default ProductListPage;