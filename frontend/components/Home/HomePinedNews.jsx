import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'
import classes from '../../styles/index.module.css'
import { combineUrl } from '../../config/utils'


const HomePindeNews = ({attachedNews}) => {
    const correctNavigatinonDefault = (
        <style jsx global>
            {`
                .navigation {
                    transition: var(--transition-regular);
                    background: rgba(0, 0, 0, 0);
                    box-shadow: none;
                }
                .link-wrapper p,
                .link-wrapper a {
                    color: var(--color-revert);
                } 
                .link-wrapper svg {
                    stroke: var(--color-revert);
                }
                .navigation-logo {
                    color: var(--color-revert);
                }
                .burger:before, 
                .burger:after {
                    background: var(--color-revert);
                }
                .link-wrapper svg {
                    stroke: var(--color-revert);
                }

                @media only screen and (min-width: 769px) {
                    .link-wrapper a.active {
                        border-bottom: 2px solid var(--color-revert);
                    }
                }
                @media only screen and (min-width: 0) and (max-width: 769px) {
                    nav {
                        background: rgba(0, 0, 0, 0.7);
                        backdrop-filter: blur(5px);
                    }
                    .nav-drop-down a {
                        color: var(--color-revert);
                    }
                    .nav-drop-down a.active {
                        color: var(--navigation-item-active);
                    }
                }
            `}
        </style>
    )
    const [correstNevigatnion, setCorrectNavigatino] = useState(correctNavigatinonDefault)
    useEffect(() => {
        document.addEventListener('scroll', e => {
            if (window.scrollY == 0) {
                setCorrectNavigatino(correctNavigatinonDefault)
            }
            else {
                setCorrectNavigatino('')
            }
        })
    }, [])

    const newsImageLoader = ({ src, width, quality, layout }) => {
        return `${src} || 75}`
    }

    return (
        <>
            <style jsx global>{`
                    .wrapper {
                        padding-top: 0;
                    }
                `}
            </style>
            {correstNevigatnion}
            <header className={['container-fluid', classes.header].join(' ')}>
                <div className={classes.news_image_wrapper}>
                    <img src={attachedNews.img} alt="" />
                    <div className={classes.blur_news_image}></div>
                </div>
                <div className={['container', classes.news_details].join(' ')}>
                    <h1>{attachedNews.title}</h1>
                    <Link href={
                        combineUrl({baseURL: 'nae/', parts: [attachedNews.slug]})
                    }>
                        <a>Дізнатись більше</a>
                    </Link>
                </div>
            </header>
        </>
    )
}

HomePindeNews.propTypes = {
    attachedNews: PropTypes.object.isRequired,
}


export default HomePindeNews
