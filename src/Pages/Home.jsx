import React from 'react';
import Banner from '../Components/Banner';
import Gellary from '../Components/Gellary';
import useTitle from '../Hoocks/useTitle';
import ShopByCategory from '../Components/ShopByCategory';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Gellary></Gellary>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;