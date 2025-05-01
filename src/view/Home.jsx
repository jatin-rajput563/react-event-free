import React from 'react'
import HomeHeader from '../components/home/HomeHeader'
import Constructor from '../components/home/Constructor'
import Special from '../components/home/Special'
import LatestEvent from '../components/home/LatestEvent'
import JoinUs from '../components/home/JoinUs'
import Footer from '../components/common/Footer'
const Home = () => {
    return (
        <>
            <HomeHeader />
            <Special/>
            <Constructor/>
            <LatestEvent/>
            <JoinUs/>
            <Footer />
        </>
    )
}

export default Home
