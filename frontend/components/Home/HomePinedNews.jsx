import PropTypes from 'prop-types'
import Link from 'next/link'
import classes from '../../styles/index.module.css'
import { combineUrl } from '../../config/utils'


const HomePindeNews = ({attachedNews}) => {
    return (
        <>
            <style jsx global>{`
                    .wrapper {
                        padding-top: 0;
                    }
                `}</style>
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
