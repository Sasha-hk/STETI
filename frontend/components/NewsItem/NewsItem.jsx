import PropTypes from 'prop-types'
import classes from './new-block.module.css'

import { parseDate } from '../../utils/date.js'


const NewsBlock = ({newsItem}) => {

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
                    <a href=""><h4>{newsItem.title}</h4></a>
                    <div>{newsItem.short_description}</div>
                </div>

                <i>{parseDate(newsItem.pub_date)}</i>
            </div>
        </article>
    )
}

NewsBlock.propTypes = {
    newsItem: PropTypes.object.isRequired
}


export default NewsBlock
