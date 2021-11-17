import Link from 'next/link'
import {useState} from 'react'
import {useRouter} from 'next/router'


export const SingleItem = ({pageName, url}) => {
    const navigationLinkClasses = ['navigation-link', 'navigation-item', 'single-navigation']

    const router = useRouter()

    if (router.route == url) {
        navigationLinkClasses.push('active')
    }
    return (
        <div className={navigationLinkClasses.join(' ')}>
            <Link href={url}><a>{pageName}</a></Link>
        </div> 
    )
}

export const MultiItem = ({pageName, items}) => {
    const navigationIndicator = (
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L4 4L7 1"/>
        </svg>
    )

    const [dropDown, setDropDown] = useState({isOpen: false})

    const dropDownClasses = ['drop-down-menu']

    if (dropDown.isOpen) {
        dropDownClasses.push('open')
    }

    const openMenu = () => {
        if (dropDown.isOpen) {
            setDropDown({isOpen: false})
        }
        else {
            setDropDown({isOpen: true})
        }
    }

    const router = useRouter()

    return (
        <div className="navigation-item multi-navigation">
            <div 
                className="multi-navigation-inside navigation-active navigation-link"
                onClick={() => openMenu()}    
            >
                <p>{pageName}</p>
                {navigationIndicator}
            </div>

            <div className={dropDownClasses.join(' ')}>
                <ul>
                    {
                        items.map(item => {
                            const navigationLinkClasses = ['navigation-link']
                            if (router.route == item.url) {
                                navigationLinkClasses.push('active')
                            }
                            return (

                                <li className={navigationLinkClasses.join(' ')} key={item.url}>
                                    <Link href={item.url}><a>{item.pageName}</a></Link>
                                </li>
                            )
                        })
                    }  
                </ul>
            </div>
        </div>
    )
}
