import PropTypes from 'prop-types'
import Footer from '../Footer'
import Navigation from '../Navigation'

const BaseLayout = ({children, footer}) => {
    return (
        <>
            <Navigation/>
            <div className="wrapper">
                <div className="content">
                    {children}
                </div>
                
                <Footer footer={footer}></Footer>
            </div>
        </>
    )
}

BaseLayout.propTypes = {
    children: PropTypes.node.isRequired,
    footer: PropTypes.object.isRequired,
}


export default BaseLayout
