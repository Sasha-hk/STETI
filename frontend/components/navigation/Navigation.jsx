import {useState} from 'react';
import { SingleItem, MultiItem } from './NavigationItems'

const navigation = () => {
    const [mobileNavigation, setMobileNavigation] = useState({isOpen: false})

    let burgerClasses = ['burger']

    if (mobileNavigation.isOpen) {
        burgerClasses.push('active')
    }

    const handleBurger = () => {
        if (mobileNavigation.isOpen) {
            setMobileNavigation({isOpen: false})
        }
        else {
            setMobileNavigation({isOpen: true})
        }
    }

    return (
        <div className="navigation">
            <nav
                className={
                    mobileNavigation.isOpen 
                        ? "open"
                        : ""
                }
            >
                <SingleItem pageName="Головна" url='/' /> 
                <SingleItem pageName="Новини та оголошення" url='/nae' /> 
                <SingleItem pageName="Циклова комісія" url='/cyclic-commission' /> 
                <MultiItem pageName="Заклад" />
                <MultiItem pageName="Навчання" />
            </nav>
            <div className={burgerClasses.join(' ')} onClick={() => handleBurger()}></div>
        </div>
    )
}


export default navigation
