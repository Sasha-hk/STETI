import PropTypes from 'prop-types'
import { initializeStore } from '../../store/store'
import {uploadUsefulLinks, uploadPartners} from '../../store/actions/aboutActions'
import { uploadNews, uploadNewsDetails } from '../../store/actions/naeActions'
import BaseLayout from '../../components/Layouts/BaseLayout.jsx'

import Details from '../../components/Article/Details'

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
            
            <Details 
                pub_date={newsDetails.pub_date}
                title={newsDetails.title}
                shortDescripton={newsDetails.short_description}
                img={newsDetails.img}
                body={newsDetails.body}
            />
            
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
