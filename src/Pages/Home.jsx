import React from 'react';
import Banner from '../Components/Banner';
import Gellary from '../Components/Gellary';
import useTitle from '../Hoocks/useTitle';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Gellary></Gellary>
        </div>
    );
};

export default Home;