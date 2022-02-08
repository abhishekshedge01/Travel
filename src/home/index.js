import React from 'react';
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import TabBar from '../components/common/tabBar';
import { useState } from 'react';
import './commonStyles.css'
import Museums from '../components/common/Museums';
import Garderns from '../components/common/Gardens';
import Forts from '../components/common/Forts';
import Temples from '../components/common/Temples';
import Animals from '../components/common/Animals';
import Library from '../components/common/Library';
import Waterfall from '../components/common/Waterfall';
import ArtGallery from '../components/common/Art Gallery';

// name: "Museums",Gardens",Forts","Lakes","Temples",Art Gallery, Library, Animals

const Home = () => {
    const [currentTab,setCurrentTab]=useState("Museums")
  return <div>
      <Header/>
      <TabBar currentTab={currentTab} setCurrentTab={setCurrentTab}/>
      {getCorrectTab(currentTab)}
      <Footer/>
  </div>;
};

const getCorrectTab=(tab)=>
{
    switch(tab)
    {
        case "Museums":
            return <Museums/>

        case "Gardens":
            return <Garderns/>

        case "Forts":
            return <Forts/>

        case "Waterfall":
            return <Waterfall/>

        case "Temples":
            return <Temples/>

        case "ArtGallery":
            return <ArtGallery/>

        case "Animals":
            return <Animals/>

        case "Library":
            return <Library/>
        
        default:
            return <Museums/>
    }
}

export default Home;
