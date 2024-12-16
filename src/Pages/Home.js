import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
// useNavigate is like the Link, we can use when we submit some form and want to move to another page or we want to move after some time to other.
  const navigate=useNavigate();
  function handleNavigate()
  {
      navigate("/products");
  }
  return (
    <>
      <div>Routers are created using createBrowserRouter and RouteProvider.</div>
      <p>
        <button onClick={handleNavigate}>Navigate to Product Page</button>
      </p>
    </>
  )
}

export default Home