import { useEffect, useState } from 'react';
import './App.css';
import NavInshorts from './components/NavInshorts';
import NewsContent from './components/NewsContent/NewsContent';
import axios from 'axios';
import { API_KEY } from './data/config';
import Footer from './components/Footer/Footer';
function App() {
  const [category,setCategory] = useState("general");
  const [newsArray,setNewsArray] = useState([])
  const [newsResults,setNewsResults] = useState()
  const [loadmore,setLoadmore] = useState(20)
  const newsApi = async() =>{
    try{
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&category=${category}&pageSize=${loadmore}`)      
      if(response.status === 200){
        setNewsArray(response?.data?.articles)
        setNewsResults(response?.data?.totalResults)
      }
      
    }catch(error){
      console.log(error);
      
    }
  }

  useEffect(()=>{
    newsApi()
    //eslint-disable-next-line
  },[category,newsResults,loadmore])
  return (
    <div className="App">
     <NavInshorts setCategory={setCategory}/>
     <NewsContent newsArray={newsArray} newsResults={newsResults} loadmore={loadmore} setLoadmore={setLoadmore}/>
     <Footer/>
    </div>
  );
}

export default App;
