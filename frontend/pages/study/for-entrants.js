import PropTypes from 'prop-types'
import { initializeStore } from '../../store/store'
import {uploadUsefulLinks, uploadPartners} from '../../store/actions/aboutActions'
import { uploadForEntrants } from '../../store/actions/studyActions'
import BaseLayout from '../../components/Layouts/BaseLayout.jsx'
import GridList from '../../components/GridList.jsx'


function ForEntrants({initialReduxState}) {
    const forEntrants = initialReduxState.study.forEntrants
    console.log(forEntrants)
    return (
        <BaseLayout 
            footer={
                {
                    partners: initialReduxState.about.partners,
                    usefulLinks: initialReduxState.about.usefulLinks
                }
            }
        >
            
            <GridList items={forEntrants} title='Абітурієнтам' />
            
        </BaseLayout>
    )
}

ForEntrants.propTypes = {
    initialReduxState: PropTypes.object.isRequired
}
 
export async function getServerSideProps(context) {
    const reduxStore = initializeStore()
    const { dispatch } = reduxStore
    
    await dispatch(uploadUsefulLinks())
    await dispatch(uploadPartners())
    await dispatch(uploadForEntrants())
    
    return { props: { initialReduxState: reduxStore.getState() } }
}
 


export default ForEntrants
