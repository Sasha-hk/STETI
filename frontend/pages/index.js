import axios from 'axios'

export default function Home() {
    const getNews = () => {
        axios({
            method: "GET",
            url: process.env.API_URL + 'nae/announcements'
        })
        .then(r => {
            console.log(r)
        })
        .catch(r => {
            console.log(r)
        })
    }


    return (
        <div>
            <button onClick={e => getNews()}>click</button>
        </div>
    )
}
