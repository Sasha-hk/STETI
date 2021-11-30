import PropTypes from 'prop-types'
import { initializeStore } from '../../../store/store'
import {uploadUsefulLinks, uploadPartners} from '../../../store/actions/aboutActions'
import { uploadForEntrantsDetails } from '../../../store/actions/studyActions'
import BaseLayout from '../../../components/Layouts/BaseLayout.jsx'


import Details from '../../../components/Article/Details'


function ForEntrantsDetails({initialReduxState}) {
    const forStudentsDetails = initialReduxState.study.forEntrantsDetails.records

    console.log(forStudentsDetails) 

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
                pub_date={forStudentsDetails.pub_date}
                title={forStudentsDetails.title}
                img={forStudentsDetails.img}
                body={forStudentsDetails.content}
            />
            
        </BaseLayout>
    )
}

ForEntrantsDetails.propTypes = {
    initialReduxState: PropTypes.object.isRequired
}
 
export async function getServerSideProps(context) {
    const reduxStore = initializeStore()
    const { dispatch } = reduxStore
 
    
    await dispatch(uploadUsefulLinks())
    await dispatch(uploadForEntrantsDetails(context.query.slug))
    
    return { props: { initialReduxState: reduxStore.getState() } }
}
 


export default ForEntrantsDetails
