import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'


const linkTypes = {
    singleLink: 'singleLink',
    multiLink: 'multiLink',
}

const moltiNavIndicator = (
    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L4 4L7 1"/>
    </svg>
)

export const LinkItem = ({link}) => {
    if (link.type == linkTypes.singleLink) {
        return (
            <li>
                <Link href={link.url}>   
                    <div className="link-wrapper">
                        <a>{ link.view }</a>
                    </div>
                </Link>
            </li>
        )
    }
    else {
        let dropDownClasses = []
        
        return (
            <li 
                className={dropDownClasses.join(' ')}
                onClick={() => openDropDonwMenu()}
            >
                <div className="link-wrapper">
                    <p>{ link.view }</p>
                    {moltiNavIndicator}
                </div>

                <div className="nav-drop-down">
                    {
                        link.items.map(item => {
                            return (
                                <Link href={item.url} key={item.url}>
                                    <a>{item.view}</a>
                                </Link>
                            )
                        })
                    }
                </div>
            </li>
        )  
    }
}

const Navigation = () => {
    const [navigation, setNabigatino] = useState({
        isOpened: true,
        links: [
            {
                id: 1,
                type: linkTypes.singleLink,
                view: 'Головна',
                url: '/',
            },
            {
                id: 2,
                type: linkTypes.multiLink,
                view: 'Заклад',
                items: [
                    {
                        view: 'Про нас',
                        url: '/about-us',
                    },
                    {
                        view: 'Контакти',
                        url: '/contacts',
                    },
                    {
                        view: 'Галерея',
                        url: '/gallery',
                    },
                ]
            },
        ],
    })

    const navigationPanelClasses = ['navigation-panel', 'container']

    if (navigation.isOpened) {
        navigationPanelClasses.push('open')
    }

    const handleBurger = () => {
        console.log(1)
        if (navigation.isOpened) {
            setNabigatino({...navigation, isOpened: false})
        }
        else {
            setNabigatino({...navigation, isOpened: true})
        }
    }

    return (
        <div className="navigation centralize">
            <div 
                className={navigationPanelClasses.join(' ')}
            >
                <span className="navigation-logo">STETI</span>

                <nav>
                    <ul>
                        {
                            navigation.links.map(link => {
                                return (
                                    <LinkItem link={link} key={link.id} />
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
