import axios from 'axios'


export default function handler(req, res) {
    axios({
        method: 'get',
        url: 'http://localhost:8000/nae/news'
    })
    .then(r => {
        res.status(200).json(r.data)
    })
    .catch(e => {
        res.status(200).json(r.response)
    })
}