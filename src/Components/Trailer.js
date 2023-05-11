import React from 'react'
import { useParams } from 'react-router-dom';




function Trailer({ Parfums }) {
  const params = useParams();
  const Parfum= Parfums.filter((el) => el.name===params.name)[0];
  console.log(Parfum);
  return (
    <div>
      <img src={Parfum.image} /> 
<h2>{Parfum.name}</h2>
<p>{Parfum.description}</p>
<p>{Parfum.price}</p>


    </div>

  )
}

export default Trailer;