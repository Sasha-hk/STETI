import PropTypes from 'prop-types'
import { initializeStore } from '../../../store/store'
import {uploadUsefulLinks, uploadPartners} from '../../../store/actions/aboutActions'
import { uploadLibrary } from '../../../store/actions/studyActions'
import BaseLayout from '../../../components/Layouts/BaseLayout.jsx'

import { LibraryBlock } from '../../../components/study/LibraryView'


function ForStudents({initialReduxState}) {
    const library = initialReduxState.study.library.records

    return (
        <BaseLayout 
            footer={
                {
                    partners: initialReduxState.about.partners,
                    usefulLinks: initialReduxState.about.usefulLinks
                }
            }
        >

            <LibraryBlock library={library} title='Бібліотека' />  
            
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
    await dispatch(uploadLibrary())
    
    return { props: { initialReduxState: reduxStore.getState() } }
}
 


export default ForStudents
