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


export default BaseLayout
