import React, { useEffect } from 'react';
import Banner from '../Components/Banner';
import Gellary from '../Components/Gellary';
import useTitle from '../Hoocks/useTitle';
import ShopByCategory from '../Components/ShopByCategory';
import Aos from 'aos';
import "aos/dist/aos.css";
import Testimonial from '../Components/Testimonial';
import Brand from '../Components/Brand';


const Home = () => {
    useTitle('Home');
    
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    return (
        <div>
            <Banner></Banner>
            <Gellary data-aos="fade-right"></Gellary>
            <ShopByCategory></ShopByCategory>
            <Brand></Brand>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;