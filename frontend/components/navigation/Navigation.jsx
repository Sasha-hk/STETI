import {useState} from 'react';
import { SingleItem, MultiItem } from './NavigationItems'


const navigation = () => {
    const [mobileNavigation, setMobileNavigation] = useState({isOpen: false})

    const burgerClasses = ['burger']

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

    const newPagaNandler = () => {
        setMobileNavigation({isOpen: false})
    }

    const navigationTypes = {
        single: 'single',
        multi: 'multi',
    }

    const navigationData = [
        {
            type: navigationTypes.single,
            pageName: 'Головна',
            url: '/',
        },
        {
            type: navigationTypes.single,
            pageName: 'Новини та оголошення',
            url: '/nae'
        },
        {
            type: navigationTypes.single,
            pageName: 'Циклова комісія',
            url: '/cyclic-commission'
        },
        {
            type: navigationTypes.multi,
            pageName: 'Заклад',
            id: 1,
            items: [
                {
                    pageName: "Про нас",
                    url: "/about-us",
                },
                {
                    pageName: "Контакти",
                    url: "/contacts"
                },
                {
                    pageName: "Галерея",
                    url: "/gallery"
                }
            ]
        },
        {
            type: navigationTypes.multi,
            pageName: 'Навчання',
            id: 2,
            items: [
                {
                    pageName: "Бібліотека",
                    url: "/library"
                },
                {
                    pageName: "Студентав",
                    url: "/for-students"
                },
                {
                    pageName: "Абітурієнтам",
                    url: "/for-entrants"
                },
                {
                    pageName: "ЗНО",
                    url: "/zno"
                }
            ]
        },
    ]

    return (
        <div className="navigation">
            <nav
                className={
                    mobileNavigation.isOpen 
                        ? "active"
                        : ""
                }
            >
                {
                    navigationData.map(item => {
                        return (
                            item.type == navigationTypes.single
                            ? <SingleItem 
                                pageName={item.pageName} 
                                url={item.url}
                                onClick={() => newPagaNandler()}
                                key={item.url} 
                            /> 
                            : <MultiItem 
                                pageName={item.pageName}
                                onClick={() => newPagaNandler()}
                                items={item.items} 
                                key={item.id}
                            /> 
                        )
                    })
                }
            </nav>
            <span className="phone-logo">STETI</span>
            <div className={burgerClasses.join(' ')} onClick={() => handleBurger()}></div>
        </div>
    )
}


export default navigation
