import PropTypes from 'prop-types'
import { initializeStore } from '../../store/store'
import {uploadUsefulLinks, uploadPartners} from '../../store/actions/aboutActions'
import { uploadForStudents } from '../../store/actions/studyActions'
import BaseLayout from '../../components/Layouts/BaseLayout.jsx'
import GridList from '../../components/GridList.jsx'


function ForStudents({initialReduxState}) {
    const forStudents = initialReduxState.study.forStudents
     
    console.log(forStudents)


    return (
        <BaseLayout 
            footer={
                {
                    partners: initialReduxState.about.partners,
                    usefulLinks: initialReduxState.about.usefulLinks
                }
            }
        >
            
            <GridList items={forStudents} title='Студентам' />
            
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
    await dispatch(uploadPartners())
    await dispatch(uploadForStudents())
    
    return { props: { initialReduxState: reduxStore.getState() } }
}
 


export default ForStudents
