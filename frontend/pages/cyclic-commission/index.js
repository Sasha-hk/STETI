import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import { combineUrl } from '../../config/utils'
import { API_URL_NEWS } from '../../config/APIUrls'
import { initializeStore } from '../../store/store'
import {uploadUsefulLinks, uploadPartners} from '../../store/actions/aboutActions'
import { uploadNews, uploadAttachedNews } from '../../store/actions/naeActions'
import { uploadForStudents } from '../../store/actions/studyActions'
import BaseLayout from '../../components/Layouts/BaseLayout.jsx'
import classes from '../../styles/cyclic-commission/cyclic-commission.module.css'

function CyclicCommission({initialReduxState}) {
    const attachedNews = initialReduxState.news.attachedNews.records[0]
    const forStudents = initialReduxState.study.forStudents

    return (
        <BaseLayout 
            footer={
                {
                    partners: initialReduxState.about.partners,
                    usefulLinks: initialReduxState.about.usefulLinks
                }
            }
        >
            
            1
            
        </BaseLayout>
    )
}

CyclicCommission.propTypes = {
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


export default CyclicCommission
