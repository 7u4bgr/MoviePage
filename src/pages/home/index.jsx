import React from 'react';
import Hero from '../../components/hero'
import Films from '../../components/films'
import Latest from '../../components/latest';
const Home = () => {
  // const [products,setProducts]=useState([
  //   {
  //     id:1,
  //     title: 'Users',
  //     image:'../../assets/images/joker.png'
  //   },
  //   {
  //     id:2,
  //     title: 'Person',
  //     image:'../../assets/images/joker.png'
  //   },
  //   {
  //     id:3,
  //     title: 'Admin',
  //     image:'../../assets/images/joker.png'
  //   },
  // ])
  return(

    <main>
      
        <Hero/>
        <Films  title={"Trending"}/>
        <Latest/>
        <Films title={"What's Popular"}/>
  </main>
)
}

export default Home;
