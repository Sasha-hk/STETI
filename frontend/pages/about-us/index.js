import PropTypes from 'prop-types'
import { initializeStore } from '../../store/store'
import {uploadUsefulLinks, uploadPartners} from '../../store/actions/aboutActions'
import { uploadNews, uploadAttachedNews } from '../../store/actions/naeActions'
import { uploadForStudents } from '../../store/actions/studyActions'
import BaseLayout from '../../components/Layouts/BaseLayout.jsx'

import { uploadAbout } from '../../store/actions/aboutActions'

import Details from '../../components/Article/Details'
import PanelNothing from '../../components/Panel/PanelNothing'


function AboutUs({initialReduxState}) {
    const aboutUs = initialReduxState.about.about.records[0]

    return (
        <BaseLayout 
            footer={
                {
                    partners: initialReduxState.about.partners,
                    usefulLinks: initialReduxState.about.usefulLinks
                }
            }
        >

            {
                aboutUs 
                    ? (
                        <Details
                            title='Про нас'
                            shortDescription='1945 - 2021' 
                            img={aboutUs.img ? aboutUs.img : null} 
                            body={aboutUs.first_paragraph}
                            
                        />
                    )
                    : (
                        <section className="container">
                            <PanelNothing />
                        </section>
                    )
            }
            
        </BaseLayout>
    )
}

AboutUs.propTypes = {
    initialReduxState: PropTypes.object.isRequired
}
 
export async function getServerSideProps(context) {
    const reduxStore = initializeStore()
    const { dispatch } = reduxStore
    
    await dispatch(uploadUsefulLinks())
    await dispatch(uploadPartners())
    await dispatch(uploadAbout())
    
    return { props: { initialReduxState: reduxStore.getState() } }
}
 


export default AboutUs
