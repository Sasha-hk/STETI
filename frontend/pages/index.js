import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import { combineUrl } from '../config/utils'
import { API_URL_NEWS } from '../config/APIUrls'
import { initializeStore } from '../store/store'
import {uploadUsefulLinks, uploadPartners} from '../store/actions/aboutActions'
import { uploadNews, uploadAttachedNews } from '../store/actions/naeActions'
import { uploadForStudents } from '../store/actions/studyActions'
import BaseLayout from '../components/Layouts/BaseLayout.jsx'
import classes from '../styles/index.module.css'

import HomePindeNews from '../components/Home/HomePinedNews'
import GridList from '../components/GridList'
import NewsBlock from '../components/Home/NewsBlock.jsx'

function Home({initialReduxState}) {
    const attachedNews = initialReduxState.news.attachedNews.records[0]
    const forStudents = initialReduxState.study.forStudents.records

    return (
        <BaseLayout 
            footer={
                {
                    partners: initialReduxState.about.partners,
                    usefulLinks: initialReduxState.about.usefulLinks
                }
            }
        >
            
            <HomePindeNews attachedNews={attachedNews} />

            <GridList items={forStudents} title='Студенту' helpURL='/study/for-students' />

            <NewsBlock news={initialReduxState.news.news} />
            
        </BaseLayout>
    )
}

Home.propTypes = {
    initialReduxState: PropTypes.object.isRequired
}
 
export async function getServerSideProps(context) {
    const reduxStore = initializeStore()
    const { dispatch } = reduxStore
    
    await dispatch(uploadUsefulLinks())
    await dispatch(uploadPartners())
    await dispatch(uploadNews())
    await dispatch(uploadAttachedNews())
    await dispatch(uploadForStudents())
    
    return { props: { initialReduxState: reduxStore.getState() } }
}
 


export default Home
