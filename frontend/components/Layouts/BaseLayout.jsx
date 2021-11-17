import Navigation from '../navigation/Navigation'


const BaseLayout = ({children}) => {
    return (
        <>
            <Navigation></Navigation>
            <main className="content-wrapper">
                {children}
            </main>
        </>
    )
}


export default BaseLayout
