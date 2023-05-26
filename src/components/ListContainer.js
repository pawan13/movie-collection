import React, { useEffect, useState } from 'react'
import CustomCard from './CustomCard'

const ListContainer = ({movieList,removeFromList }) => {

    const [display, setDisplay] = useState([])

    useEffect(() =>{
        setDisplay(movieList)
    }, [movieList])
    const handleOnFilter = type =>{
        if(type === 'all'){
            return setDisplay(movieList)
        }
        const filteredArg = movieList.filter((item)=> item.type === type)
        setDisplay(filteredArg)
    }
    
  return (
    <div className="list-container">
      <div className="btn-group" role="group" aria-label="Basic example">
  <button onClick={()=>handleOnFilter('all')} type="button" className="btn btn-primary">All</button>
  <button onClick={()=>handleOnFilter('awesome')} type="button" className="btn btn-warning">Awesome</button>
  <button onClick={()=>handleOnFilter('boring')}type="button" className="btn btn-danger">Boring</button>
</div>
<div className='mt-3'>{movieList.length} movies found</div>
<hr />
<div className='d-flex flex-wrap justify-content-around g-2'>
    {display?.map((item)=>(
    <CustomCard {...item} removeFromList={removeFromList}/>
    ))}
</div>
    </div>
  )
}

export default ListContainer
