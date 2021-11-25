import PropTypes from 'prop-types'
import Link from 'next/link'
import { combineUrl } from '../config/utils'
import { API_URL_NEWS } from '../config/APIUrls'
import { initializeStore } from '../store/store'
import {uploadUsefulLinks, uploadPartners} from '../store/actions/aboutActions'
import { uploadNews } from '../store/actions/naeActions'
import BaseLayout from '../components/Layouts/BaseLayout.jsx'

import NewsItem from '../components/NewsItem/NewsItem.jsx'
import Grid from '../components/Layouts/Grid'
import classes from '../styles/nae.module.css'

function NAE({initialReduxState}) {
    const news = initialReduxState.news.news

    return (
        <BaseLayout
            footer={
                {
                    partners: initialReduxState.about.partners,
                    usefulLinks: initialReduxState.about.usefulLinks
                }
            }
        >

            <div className="container">
                <h2 className={classes.fix_title}>Новини та оголовшення</h2>
                <Grid>
                    {
                        news.records.map(newsItem => {
                            return (
                                <NewsItem newsItem={newsItem} key={newsItem.id} />
                            )
                        })
                    }
                </Grid>
            </div>
            
        </BaseLayout>
    )
}

NAE.propTypes = {
    initialReduxState: PropTypes.object.isRequired
}
 
export async function getStaticProps(context) {
    const reduxStore = initializeStore()
    const { dispatch } = reduxStore
    
    await dispatch(uploadUsefulLinks())
    await dispatch(uploadPartners())
    await dispatch(uploadNews())
    
    return { props: { initialReduxState: reduxStore.getState() } }
}
 


export default NAE
