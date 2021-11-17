import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import Head from 'next/head'

import Navigation from '../components/navigation/Navigation.jsx'

function Home() {
    return (
        <>
            <Head>
                <meta name="keywords" content="STETI" />
                <meta name="description" content="The official website of Sambir collage of economics and information technology" />
                <title>STETI</title>
            </Head>
            <Navigation></Navigation>
            
            <section className='container'>
                <h1>Самбірський фаховий коледж економіки та інформаційних технологій</h1>
                <h2>Самбірський фаховий коледж економіки та інформаційних технологій</h2>
                <h3>Самбірський фаховий коледж економіки та інформаційних технологій</h3>
                <h4>Самбірський фаховий коледж економіки та інформаційних технологій</h4>
                <h5>Самбірський фаховий коледж економіки та інформаційних технологій</h5> 
                <small>small Самбірський фаховий коледж економіки та інформаційних технологій</small>
                <p>p Самбірський фаховий коледж економіки та інформаційних технологій</p>
                <b>b Самбірський фаховий коледж економіки та інформаційних технологій</b><br />
                <a href="">a Самбірський фаховий коледж економіки та інформаційних технологій</a>
            </section>
        </>
    )
}


export default Home;
