import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import { initializeStore } from '../store/store'
import {uploadUsefulLinks, uploadPartners} from '../store/actions/aboutActions'
import { uploadNews, uploadAttachedNews } from '../store/actions/naeActions'
import BaseLayout from '../components/Layouts/BaseLayout.jsx'


function Home({initialReduxState}) {
    console.log(initialReduxState.news.attachedNews)

    const attachedNews = initialReduxState.news.attachedNews.records[0]

    return (
        <BaseLayout 
            footer={
                {
                    partners: initialReduxState.about.partners,
                    usefulLinks: initialReduxState.about.usefulLinks
                }
            }
        >
            <header>
                <img src={attachedNews.img} alt="" />
                <div className="container">
                    <h1>{attachedNews.title}</h1>
                </div>
            </header>

            <section className='container'>
                Content
            </section>
        </BaseLayout>
    )
}

Home.propTypes = {
    initialReduxState: PropTypes.object.isRequired
}
 
export async function getStaticProps(context) {
    const reduxStore = initializeStore()
    const { dispatch } = reduxStore
    
    await dispatch(uploadUsefulLinks())
    await dispatch(uploadPartners())
    await dispatch(uploadNews())
    await dispatch(uploadAttachedNews())
    
    return { props: { initialReduxState: reduxStore.getState() } }
}
 


export default Home
