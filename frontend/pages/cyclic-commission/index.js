import PropTypes from 'prop-types'
import { initializeStore } from '../../store/store'
import {uploadUsefulLinks, uploadPartners} from '../../store/actions/aboutActions'
import BaseLayout from '../../components/Layouts/BaseLayout.jsx'
import classes from '../../styles/cyclic-commission/cyclic-commission.module.css'
import Panel from '../../components/Panel/Panel.jsx'

import { uploadCyclicCommission } from '../../store/actions/cyclicCommissionActions'

function CyclicCommission({initialReduxState}) {
    const cyclicCommissionList = initialReduxState.cyclicCommission.cyclicCommissionList

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
                <h2>Циклова комісія</h2>
                <div className={classes.list_wrapper}>
                    {
                        cyclicCommissionList.records.map(item => {
                            return (
                                <Panel key={item.id} title={item.name} href={'/cyclic-commission/' +  item.slug} date={item.updated_at}/>
                            )
                        })
                    }
                </div>
            </div>
            
        </BaseLayout>
    )
}

CyclicCommission.propTypes = {
    initialReduxState: PropTypes.object.isRequired
}
 
export async function getServerSideProps(context) {
    const reduxStore = initializeStore()
    const { dispatch } = reduxStore
    
    await dispatch(uploadUsefulLinks())
    await dispatch(uploadPartners())
    await dispatch(uploadCyclicCommission())
    
    return { props: { initialReduxState: reduxStore.getState() } }
}


export default CyclicCommission
