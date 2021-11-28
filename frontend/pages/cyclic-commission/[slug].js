import PropTypes from 'prop-types'
import { initializeStore } from '../../store/store'
import {uploadUsefulLinks, uploadPartners} from '../../store/actions/aboutActions'
import BaseLayout from '../../components/Layouts/BaseLayout.jsx'
import classes from '../../styles/cyclic-commission/cyclic-commission.module.css'
import Panel from '../../components/Panel/Panel.jsx'

import { uploadCyclicCommissionDetails } from '../../store/actions/cyclicCommissionActions'

function CyclicCommissionDetails({initialReduxState}) {
    const cyclicCommissionDetails = initialReduxState.cyclicCommission.cyclicCommissionDetails.records

    return (
        <BaseLayout
            footer={
                {
                    partners: initialReduxState.about.partners,
                    usefulLinks: initialReduxState.about.usefulLinks
                }
            }
        >
            
            <div className="container">
                <h2>{cyclicCommissionDetails.name}</h2>

                <div className={classes.list_wrapper}>
                    {
                        cyclicCommissionDetails.items.map(item => {
                            return (
                                <Panel key={item.id} title={item.name} href={'/cyclic-commission/item/' +  item.slug}/>
                            )
                        })
                    }
                </div>
            </div>
            
        </BaseLayout>
    )
}

CyclicCommissionDetails.propTypes = {
    initialReduxState: PropTypes.object.isRequired
}
 
export async function getServerSideProps(context) {
    const reduxStore = initializeStore()
    const { dispatch } = reduxStore
    
    await dispatch(uploadUsefulLinks())
    await dispatch(uploadPartners())
    await dispatch(uploadCyclicCommissionDetails(context.query.slug))
    
    return { props: { initialReduxState: reduxStore.getState() } }
}


export default CyclicCommissionDetails
