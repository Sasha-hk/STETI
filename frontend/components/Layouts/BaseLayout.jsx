import Navigation from '../navigation/Navigation'


const BaseLayout = ({children}) => {
    return (
        <>
            <Navigation/>
            <div className="wrapper">
                <div className="content">
                    {children}
                </div>
            </div>
        </>
    )
}


export default BaseLayout
