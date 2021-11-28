import PropTypes from 'prop-types'
import { initializeStore } from '../../../store/store'
import {uploadUsefulLinks, uploadPartners} from '../../../store/actions/aboutActions'
import BaseLayout from '../../../components/Layouts/BaseLayout.jsx'
import classes from '../../../styles/cyclic-commission/cyclic-commission.module.css'
import Details from '../../../components/Article/Details'

import { uploadCyclicCommissionItemDetails } from '../../../store/actions/cyclicCommissionActions'

function CyclicCommissionItemDetails({initialReduxState}) {
    const cyclicCommissionDetails = initialReduxState.cyclicCommission.cyclicCommissionItemDetails.records

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
                title={cyclicCommissionDetails.name}
                img={cyclicCommissionDetails.img}
                body={cyclicCommissionDetails.body}
            />
            
        </BaseLayout>
    )
}

CyclicCommissionItemDetails.propTypes = {
    initialReduxState: PropTypes.object.isRequired
}
 
export async function getServerSideProps(context) {
    const reduxStore = initializeStore()
    const { dispatch } = reduxStore
    
    await dispatch(uploadUsefulLinks())
    await dispatch(uploadPartners())
    await dispatch(uploadCyclicCommissionItemDetails(context.query.slug))
    
    return { props: { initialReduxState: reduxStore.getState() } }
}


export default CyclicCommissionItemDetails
