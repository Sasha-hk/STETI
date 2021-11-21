import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import { initializeStore } from '../store/store'
import {uploadUsefulLinks, uploadPartners} from '../store/actions/aboutActions'
import { uploadNews } from '../store/actions/naeActions'
import BaseLayout from '../components/Layouts/BaseLayout.jsx'


function Home({initialReduxState}) {
    console.log(initialReduxState.news)
    return (
        <BaseLayout 
            footer={
                {
                    partners: initialReduxState.about.partners,
                    usefulLinks: initialReduxState.about.usefulLinks
                }
            }
        >
            <header>

            </header>

            <section className='container'>
                <h1>Самбірський фаховий коледж економіки та інформаційних технологій</h1>

            </section>
        </BaseLayout>
    )
}

Home.propTypes = {
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
 


export default Home
