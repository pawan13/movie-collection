import React from 'react'

export const CustomCard = ({Poster, Title, Year, imdbRating, handleOnAddMovieClicked,removeFromList, imdbID}) => {
  return (
    <div className="card" style={{width: "18rem", marginTop: "1rem"}}>
  <img src={Poster} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{Title}</h5>
    <div className="card-text">
      <div>Rate: {imdbRating}</div>
      <div>Released: {Year}</div>
    </div>
  { handleOnAddMovieClicked && <div className="d-flex justify-content-between py-3">
      <button className='btn btn-warning'
      onClick={()=> handleOnAddMovieClicked('awesome')}>
        Awesome</button>
      <button className='btn btn-danger'
      onClick={()=> handleOnAddMovieClicked('boring')}>
        Boring</button>
    </div>}
    
    <div className="d-grid">
      <button className='btn btn-danger'onClick={()=>removeFromList(imdbID)}>Remove</button>
    </div>
    </div>
</div>
  )
}

export default CustomCard
