import './App.css'
import Upload from './components/Upload';
import { useState , useEffect } from 'react';
import React from 'react';
import Article from './components/Article';




function App() {

  const [Articles,setArticles] = useState([]);


const getArticles = async () => {
  const articles = await fetch( 'http://localhost:8000/articles/' , {
      method: 'GET',
      headers: {"Content-Type" : "application/json"}, // put everytime i guess
  });

  const articles_in_json = await articles.json();
  console.log(articles_in_json);
  
  setArticles(articles_in_json);
}

useEffect(() => {
  getArticles();
},[])

  return (
    <>
      <Upload />
      <div className='articles'>
          {
              Articles.map((an_article) => {
                  return (
                  <Article props={an_article}/>
                  )
              })
          }
      </div>
      
    </>
  )
}

export default App
