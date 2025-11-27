import React from 'react';
import Slider from '../components/Slider';
import PopularServices from '../components/PopularServices';
import MeetOurVets from '../components/MeetOurVets';
import WinterCareTips from '../components/WinterCareTips';
import FeaturesCards from '../components/FeaturesCards';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularServices></PopularServices>
            <MeetOurVets></MeetOurVets>
            <WinterCareTips></WinterCareTips>
            <FeaturesCards></FeaturesCards>

        </div>
    );
};

export default Home;