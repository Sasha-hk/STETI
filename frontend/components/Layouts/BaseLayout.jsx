import Navigation from '../navigation/Navigation'
import Footer from '../Footer'

const BaseLayout = ({children}) => {
    return (
        <>
            <Navigation/>
            <div className="wrapper">
                <main className="content-wrapper">
                    {children}
                </main>
                <Footer/>   
            </div>
        </>
    )
}


export default BaseLayout
