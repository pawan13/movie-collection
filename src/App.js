import { useState } from 'react';
import './App.css';
import ListContainer from './components/ListContainer';
import SearchForm from './components/SearchForm';

function App() {
  const [movieList, setMovieList] = useState([])

  const addToList = movie =>{
    const arg = movieList.filter(item => item.imdbID !== movie.imdbID)
    setMovieList([...arg, movie])
  }

  const removeFromList = id =>{
    const arg = movieList.filter(item => item.imdbID === id)
    setMovieList(arg)
  }
  return (
    <div className="wrapper bg-dark text-warning">
      <div className="container">
        <div className="row">
          <div className="col text-center mt-5 fs-1">
               {/* Title secction */}
            My movie collection
            <hr />
          </div>
        </div>
         {/* form section  */}
      <SearchForm addToList= {addToList} removeFromList={removeFromList}/>

      {/* list section  */}
      <ListContainer movieList={movieList} removeFromList={removeFromList}/>
      </div>
    </div>
  );
}

export default App;
