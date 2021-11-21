import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'

import { combineUrl } from '../config/utils'
import { API_URL_NEWS } from '../config/APIUrls'
import { initializeStore } from '../store/store'
import {uploadUsefulLinks, uploadPartners} from '../store/actions/aboutActions'
import { uploadNews, uploadAttachedNews } from '../store/actions/naeActions'
import BaseLayout from '../components/Layouts/BaseLayout.jsx'
import classes from '../styles/index.module.css'

function Home({initialReduxState}) {
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
            <style jsx global>{`
                .wrapper {
                    padding-top: 0;
                }
            `}</style>
            <header className={['container-fluid', classes.header].join(' ')}>
                <div className={classes.news_image_wrapper}>
                    <img src={attachedNews.img} alt="" />
                    <div className={classes.blur_news_image}></div>
                </div>
                <div className={['container', classes.news_details].join(' ')}>
                    <h1>{attachedNews.title}</h1>
                    <Link href={
                        combineUrl({baseURL: 'nae/', parts: [attachedNews.slug]})
                    }>
                        <a>Дізнатись більше</a>
                    </Link>
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
