import PropTypes from 'prop-types'
import { initializeStore } from '../store/store'
import {uploadUsefulLinks, uploadPartners} from '../store/actions/aboutActions'
import { uploadContactNumbers } from '../store/actions/aboutActions'
import BaseLayout from '../components/Layouts/BaseLayout.jsx'
import Grid from '../components/Layouts/Grid'
import PanelNothing from '../components/Panel/PanelNothing'


function Contacts({initialReduxState}) {
    const contactNumbers = initialReduxState.about.contactNumbers

    return (
        <BaseLayout 
            footer={
                {
                    partners: initialReduxState.about.partners,
                    usefulLinks: initialReduxState.about.usefulLinks
                }
            }
        >
            
            <section className="container">
                <h2>Контакти</h2>

                {
                    contactNumbers.records.length != 0
                        ? (
                            <Grid>
                                {
                                    contactNumbers.records.map(contactnumber => {
                                        return (
                                            <div 
                                                key={contactnumber.id} 
                                                style={
                                                    {
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                    }
                                                }
                                            >
                                                <b className='text-overflow'>{contactnumber.name}</b>
                                                <i className='text-overflow'>{contactnumber.phone_number}</i>
                                            </div>
                                        )
                                    })
                                }
                            </Grid>
                        )
                        : (
                            <PanelNothing />
                        )
                }
            </section>
            
        </BaseLayout>
    )
}

Contacts.propTypes = {
    initialReduxState: PropTypes.object.isRequired
}
 
export async function getServerSideProps(context) {
    const reduxStore = initializeStore()
    const { dispatch } = reduxStore
    
    await dispatch(uploadUsefulLinks())
    await dispatch(uploadPartners())
    await dispatch(uploadContactNumbers())
    
    return { props: { initialReduxState: reduxStore.getState() } }
}
 


export default Contacts
