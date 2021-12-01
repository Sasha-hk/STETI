import PropTypes from 'prop-types'
import { initializeStore } from '../../../store/store'
import {uploadUsefulLinks, uploadPartners} from '../../../store/actions/aboutActions'
import {uploadLibraryDetails} from '../../../store/actions/studyActions'
import BaseLayout from '../../../components/Layouts/BaseLayout.jsx'

import Grid from '../../../components/Layouts/Grid'
import Link from 'next/link'
import Panel from '../../../components/Panel/Panel'


function LibraryDetails({initialReduxState}) {
    const libraryDetails = initialReduxState.study.libraryDetails.records

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
                {
                    libraryDetails.category_name && <h2>{libraryDetails.category_name}</h2>
                }
                <Grid>
                    {
                        libraryDetails.items.map(panelItem => {
                            console.log(panelItem)
                            return (
                                <Link href={panelItem.link} key={panelItem.id}>
                                    <a target="_blank">
                                        <Panel title={panelItem.name} />
                                    </a>
                                </Link>
                            )
                        })
                    }
                </Grid>
            </section>

        </BaseLayout>
    )
}

LibraryDetails.propTypes = {
    initialReduxState: PropTypes.object.isRequired
}
 
export async function getServerSideProps(context) {
    const reduxStore = initializeStore()
    const { dispatch } = reduxStore
 
    
    await dispatch(uploadUsefulLinks())
    await dispatch(uploadPartners())
    await dispatch(uploadLibraryDetails(context.query.slug))
    
    return { props: { initialReduxState: reduxStore.getState() } }
}
 


export default LibraryDetails
