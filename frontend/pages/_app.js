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


