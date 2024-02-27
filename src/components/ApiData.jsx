import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ApiData = () => {
    const products=useLoaderData()
  return (
    <div>
        {products.length}
    </div>
  )
}

export default ApiData

export const getAPiData=async()=>{
    let response=await fetch("https://65cf0df7bdb50d5e5f5a617a.mockapi.io/products")
    return response.json()
}