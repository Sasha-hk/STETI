import Link from 'next/link'


export const SingleItem = ({pageName, url}) => {
    return (
        <div className="navigation-item single-navigation">
            <Link href={url}><a>{pageName}</a></Link>
        </div> 
    )
}

export const MultiItem = ({pageName, url}) => {
    const navigationIndicator = (
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L4 4L7 1"/>
        </svg>
    )
    return (
        <div className="navigation-item multi-navigation">
            <p>{pageName}</p>
            {navigationIndicator}
        </div>
    )
}
