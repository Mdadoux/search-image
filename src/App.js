import React, { useState, useEffect } from 'react';
import './App.css';
import ImageCard from './componnents/imageCard';
import ImageSearch from './componnents/ImageSearch';
import Pagination from './componnents/Pagination';

function App() {

  const [images, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(3)

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=3686477-28e03c9f3ab03261c45cf9895&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImage(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  const indexOfTheLastPost = currentPage * postPerPage;
  const indexOfTheFirstPost = indexOfTheLastPost - postPerPage;
  const currentPosts = images.slice(indexOfTheFirstPost, indexOfTheLastPost);

  /// changer de page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="container-fluid">
      <ImageSearch searchText={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && <h1>No image has been found</h1>}
      {isLoading ? <h1>Data is loading</h1> :
        <div className="card-list">
          {currentPosts.map(image => <ImageCard key={image.id} image={image} />)}
        </div>
      }
      <Pagination totalPosts={images.length} postPerPage={postPerPage} paginate={paginate} />
    </div>
  );
}

export default App;
