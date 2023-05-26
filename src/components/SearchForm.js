import React, { useState } from 'react'
import CustomCard from './CustomCard'
import { fetchData } from '../Helper/axiosHelper'



const SearchForm = ({addToList, removeFromList}) => {
const [form, setForm] = useState("")
const [movie, setMovie] = useState({})
const [isError, setIsError] = useState(false)


  const handleOnChange = (e) =>{
    const {value} = e.target;
    setForm(value)
  }

  const handleOnSubmit = async (e) =>{
    e.preventDefault();

    // call the api
    const data = await fetchData(form)

    if (data?.imdbID) {
      setMovie(data)
      setIsError(false)
    } else{
      setIsError(true)
      setMovie({})
    }
       
  }

  const handleOnAddMovieClicked=(type)=>{
   addToList({...movie, type})
   setMovie({})
  }

  return (
    <div className='search-form'>
    <form action="" onSubmit={handleOnSubmit}>
    <div className="row g-2 ">
  <div className="col-md-9">
    <input type="text"
     className="form-control"
      placeholder="movie name"
       aria-label="movie name"
       onChange={handleOnChange}
       required
       />
  </div>
  <div className="col-md-3 d-grid">
   <button className="btn btn-warning">
    search
    </button> 
  </div>
</div>
</form>

<div className="d-flex justify-content-center mt-3">
  {movie.imdbID && <CustomCard { ...movie} 
  handleOnAddMovieClicked={handleOnAddMovieClicked}
  removeFromList={removeFromList}/>}
  { isError && <div className='alert alert-danger '>No movie Found!</div>
  }
  </div>
</div>
  )
}

export default SearchForm
