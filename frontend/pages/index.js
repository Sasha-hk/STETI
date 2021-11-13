import axios from 'axios'


const API_URL = process.env.API_URL

function Home({posts}) {
    return (
        <div>
            <div>Next stars:{posts}</div>
        </div>
    )
}


export default Home;
