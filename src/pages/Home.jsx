import React from 'react';
import Slider from '../components/Slider';
import PopularServices from '../components/PopularServices';
import MeetOurVets from '../components/MeetOurVets';
import WinterCareTips from '../components/WinterCareTips';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularServices></PopularServices>
            <MeetOurVets></MeetOurVets>
            <WinterCareTips></WinterCareTips>
        </div>
    );
};

export default Home;