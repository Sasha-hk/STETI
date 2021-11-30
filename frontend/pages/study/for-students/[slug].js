import PropTypes from 'prop-types'
import { initializeStore } from '../../../store/store'
import {uploadUsefulLinks, uploadPartners} from '../../../store/actions/aboutActions'
import { uploadForStudentsDetails } from '../../../store/actions/studyActions'
import BaseLayout from '../../../components/Layouts/BaseLayout.jsx'


import Details from '../../../components/Article/Details'


function ForStudents({initialReduxState}) {
    const forStudentsDetails = initialReduxState.study.forStudentsDetails.records

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
                title={forStudentsDetails.title}
                img={forStudentsDetails.img}
                body={forStudentsDetails.content}
            />
            
        </BaseLayout>
    )
}

ForStudents.propTypes = {
    initialReduxState: PropTypes.object.isRequired
}
 
export async function getServerSideProps(context) {
    const reduxStore = initializeStore()
    const { dispatch } = reduxStore
 
    
    await dispatch(uploadUsefulLinks())
    await dispatch(uploadForStudentsDetails(context.query.slug))
    
    return { props: { initialReduxState: reduxStore.getState() } }
}
 


export default ForStudents
