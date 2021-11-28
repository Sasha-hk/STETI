import PropTypes from 'prop-types'
import { parseDate } from '../../utils/date'
import classes from './details.module.css'

function Details({title, shortDescripton, body, img, pub_date}) {
    return (
        <div className="container">
            <div className={['text-wrapper', classes.details_header].join(' ')}>
                {
                    pub_date && <i>{parseDate(pub_date)}</i>
                }
                {
                    title && <h2>{title}</h2>
                }
                {
                    shortDescripton && <p>{shortDescripton}</p>
                }
            </div>

            {
                img && (
                    <div className={classes.image_wrapper}>
                        <img src={img} className={classes.news_image} alt="" />
                    </div>
                )
            }

            {
                body && (
                    <div className="text-wrapper">
                        {body}
                    </div>
                )
            }
        </div>
    )
}

Details.propTypes = {
    title: PropTypes.string,
    shortDescripton: PropTypes.string,
    body: PropTypes.string,
    img: PropTypes.string,
    pub_date: PropTypes.string,
}


export default Details
