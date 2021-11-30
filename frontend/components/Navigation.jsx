import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import PropTypes from 'prop-types'


const navigationType = {
    snigle: 'single',
    multi: 'multi',
}

const LinkItem = ({link, openDropDown}) => {
    const router = useRouter().route

    if (link.type == navigationType.single) {
        return (
            <li>
                <div className="link-wrapper">
                    <Link href={link.url}>
                        <a 
                            className={
                                router == link.url
                                    ? 'active'
                                    : null
                            }
                        >
                        {link.pageName}
                        </a>
                    </Link>
                </div>
            </li>
        )
    }
    else {
        const moltiNavIndicator = (
            <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L4 4L7 1"/>
            </svg>
        )

        return (
            <li
                className={link.isOpen ? 'open' : null}
                onClick = {() => openDropDown()}
            >
                <div className="link-wrapper">
                    <p>
                        {link.pageName}
                    </p>
                    {moltiNavIndicator}
                </div>

                <div className="nav-drop-down">
                    {
                        link.items.map((item, i) => {
                            let linkClasses = []

                            if (router == item.url) {
                                linkClasses.push('active')
                            }
                            return ( 
                                <Link href={item.url} key={i}>
                                    <a 
                                        className={linkClasses.join(' ')}
                                    >
                                        {item.pageName}
                                    </a>
                                </Link>
                            )
                        })
                    }
                </div>
            </li>
        )
    }
}

LinkItem.propTypes = {
    link: PropTypes.object.isRequired,
    openDropDown: PropTypes.func.isRequired,
}

const Navigation = () => {
    const navigationDefaultState = {
        lockScroll: false,
        isOpen: false,
        links: [
            {
                type: navigationType.single,
                pageName: 'Головна',
                url: '/',
            },
            {
                type: navigationType.single,
                pageName: 'Новини та оголовшення',
                url: '/nae',
            },
            {
                type: navigationType.single,
                pageName: 'Циклова комісія',
                url: '/cyclic-commission',
            },
            {
                type: navigationType.multi,
                pageName: 'Заклад',
                isOpen: false,
                items: [
                    {
                        pageName: 'Про нас',
                        url: '/about-us',
                    },
                    {
                        pageName: 'Контакти',
                        url: '/contacts',
                    },
                    {
                        pageName: 'Галерея',
                        url: '/gallery',
                    },
                ]
            },
            {
                type: navigationType.multi,
                pageName: 'Навчання',
                isOpen: false,
                items: [
                    {
                        pageName: 'Студенту',
                        url: '/study/for-students',
                    },
                    {
                        pageName: 'Абітурієнту',
                        url: '/study/for-entrants',
                    },
                    {
                        pageName: 'Бібліотека',
                        url: '/study/library',
                    },
                    {
                        pageName: 'ЗНО',
                        url: '/study/zno',
                    },
                ]
            },
        ]
    }

    const [navigation, setNavigation] = useState(navigationDefaultState)

    const handleBurger = () => {
        if (navigation.isOpen) {
            setNavigation({
                ...navigationDefaultState,
                isOpen: false,
                lockScroll: false,
            })
        }
        else {
            console.log('lock')
            setNavigation({
                ...navigationDefaultState,
                isOpen: true,
                lockScroll: true,
            })
        }
    }
    
    const lockBody = (
        <style jsx global>
            {`
                body {
                    overflow: hidden;
                }
            `}
        </style>
    )

    const navigationPanelClasses = ['navigation-panel', 'container']

    if (navigation.isOpen) {
        navigationPanelClasses.push('open')
    }

    return (
        <div className="navigation centralize">
            {
                navigation.lockScroll && lockBody
            }
            <div 
                className={navigationPanelClasses.join(' ')}
            >
                <span className="navigation-logo">STETI</span>

                <nav>
                    <ul>
                        {
                            navigation.links.map((link, i) => {
                                const openDropDown = () => {
                                    let newLinks = [...navigationDefaultState.links]
                                    if (navigation.links[i].isOpen) {
                                        newLinks[i].isOpen = false
                                    }
                                    else {
                                        newLinks[i].isOpen = true
                                    }
                                    setNavigation({
                                        ...navigation,
                                        links: [
                                            ...newLinks
                                        ]
                                    })
                                }
                                return (
                                    <LinkItem link={link} openDropDown={openDropDown} key={i} />
                                )
                            })
                        }
                    </ul>
                </nav>

                <div 
                    className="burger"
                    onClick={() => handleBurger()}    
                ></div>
            </div>
        </div>
    )
}


export default Navigation
