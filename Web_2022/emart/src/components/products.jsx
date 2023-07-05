import React, { useEffect, useState } from 'react'

const Producta = () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data)
  const [loding, setLoding] = useState(false)
  let componentMounted = true

  useEffect(() => {
    const getProducts = async () => {
      setLoding(true)
      const resopnse = await fetch('https://fakestoreapi.com/products')

      if (componentMounted) {
        setData(await resopnse.clone().json())
        setFilter(await resopnse.json())
        setLoding(false)
        console.log(filter)
      }
      return () => {
        componentMounted = false
      }
    }
    getProducts()
  }, [])

  const Loding = () => {
    return <>loding....</>
  }

  const ShowProducts = () => {
    return (
      <>
        <div className='buttons d-flex justify-content-center mb-5 pb-5'>
          <button className='btn btn-outline-dark me-2'>all</button>
          <button className='btn btn-outline-dark me-2'>men's clothing</button>
          <button className='btn btn-outline-dark me-2'>
            women's clothing
          </button>
          <button className='btn btn-outline-dark me-2'>
            jewelery clothing
          </button>
          <button className='btn btn-outline-dark me-2'>electronic </button>
        </div>
        {filter.map((product) => {
          const { image, title, price, id } = product
          return (
            <>
              {/*
             xl => xlarge screen show 4 products 
             lg => large screen show 3 products
             md => medium screen show 2 product

            */}
              <div className='col-xl-3 col-lg-4 col-md-6 '>
                <div class='card h-100 text-center p-4' key={id}>
                  <img class='card-img-top' src={image} alt='Card image cap' />
                  <div class='card-body'>
                    <h5 class='card-title'>{title}</h5>
                    <p class='card-text'>${price}</p>
                    <a href='#' class='btn btn-primary'>
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </>
    )
  }

  return (
    <div className='container my-5 py-5'>
      <div className='row'>
        <div className='col-12 mb-5'>
          <h1 className='display-6 fw-bolder text-center'>latest products</h1>
          <hr />
        </div>
      </div>
      <div className='row justify-content-center'>
        {/* if loding === true ? you will show messge "loding" else will show products  */}
        {loding ? <Loding /> : <ShowProducts />}
      </div>
    </div>
  )
}

export default Producta
