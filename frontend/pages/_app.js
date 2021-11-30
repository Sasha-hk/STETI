import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import useStore from '../store/store'

import '../styles/base.css'
import '../styles/navigation.css'
import '../styles/footer.css'


export default function App({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState)

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

App.propTypes = {
    Component: PropTypes.any.isRequired,
    pageProps: PropTypes.object.isRequired,
}
 

