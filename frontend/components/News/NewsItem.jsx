import PropTypes from 'prop-types'
import classes from './new-block.module.css'
import Link from 'next/link'

import { parseDate } from '../../utils/date.js'


export const NewsItem = ({newsItem}) => {
    return (
        <article className={classes.news_block}>
            {
                newsItem.img 
                    && (
                        <div className={classes.image_wrapper}>
                            <img src={newsItem.img} alt="" />
                        </div>
                    )
            }

            <div className={classes.news_description_wrapper}>
                <div className={classes.news_description}>
                    <Link href={'nae/' + newsItem.slug}>
                        <a><h4>{newsItem.title}</h4></a>
                    </Link>
                    <div>{newsItem.short_description}</div>
                </div>

                <i>{parseDate(newsItem.pub_date)}</i>
            </div>
        </article>
    )
}

NewsItem.propTypes = {
    newsItem: PropTypes.object.isRequired
}

export const NewsView = ({newsItem}) => {
    return (
        <article className={classes.news_block_view}>
            {
                newsItem.img
                    ? (
                        <>
                            <div className={classes.image_wrapper}>
                                <img src={newsItem.img} alt="" />
                                <div></div>
                            </div>
                            <div className={classes.news_description_fill}>
                                <i>{parseDate(newsItem.pub_date)}</i>
                                <Link href={'nae/' + newsItem.slug}>
                                    <a><h4>{newsItem.title}</h4></a>
                                </Link>
                            </div>
                        </>
                    )
                    : (
                        <div className={classes.news_description}>
                            <div className=''>
                                <Link href={'nae/' + newsItem.slug}>
                                    <a><h4>{newsItem.title}</h4></a>
                                </Link>
                                <div>{newsItem.short_description}</div>
                            </div>

                            <i>{parseDate(newsItem.pub_date)}</i>
                        </div>
                    )
            }
        </article>
    )
}

NewsView.propTypes = {
    newsItem: PropTypes.object.isRequired
}
