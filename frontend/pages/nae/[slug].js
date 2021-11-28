import PropTypes from 'prop-types'
import { initializeStore } from '../../store/store'
import {uploadUsefulLinks, uploadPartners} from '../../store/actions/aboutActions'
import { uploadNews, uploadNewsDetails } from '../../store/actions/naeActions'
import BaseLayout from '../../components/Layouts/BaseLayout.jsx'


import Grid from '../../components/Layouts/Grid.jsx'
import classes from '../../styles/nae/nae-details.module.css'
import { parseDate } from '../../utils/date'

function NAEDetails({initialReduxState}) {
    const newsDetails = initialReduxState.news.newsDetails.records

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
                <div className={['text-wrapper', classes.news_details_header].join(' ')}>
                    <i>{parseDate(newsDetails.pub_date)}</i>
                    <h2>{newsDetails.title}</h2>
                    <p>{newsDetails.short_description}</p>
                </div>

                <div className={classes.image_wrapper}>
                    <img src={newsDetails.img} className={classes.news_image} alt="" />
                </div>

                <div className="text-wrapper">
                    {newsDetails.body}
                </div>
            </div>
            
        </BaseLayout>
    )
}

NAEDetails.propTypes = {
    initialReduxState: PropTypes.object.isRequired
}

export async function getServerSideProps(context) {    
    const reduxStore = initializeStore()
    const { dispatch } = reduxStore
    
    await dispatch(uploadUsefulLinks())
    await dispatch(uploadPartners())
    await dispatch(uploadNews())
    await dispatch(uploadNewsDetails(context.query.slug))
    
    return {
        props: { 
            initialReduxState: reduxStore.getState() 
        },
    }
}
 


export default NAEDetails
