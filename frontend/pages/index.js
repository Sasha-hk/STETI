import axios from 'axios'

const API_URL = process.env.API_URL

const makeAPI = (path) => {
    return API_URL + path
}

export default function Home() {
    const getNews = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:8000/nae/news'
        })
        .then(r => {
            console.log(r)
        })
        .catch(e => {
            console.log(e)
        })
    }

    return (
        <div>
            <button onClick={e => getNews()}>click</button>
        </div>
    )
}
