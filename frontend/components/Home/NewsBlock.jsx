import PropTypes from 'prop-types'
import NewsItem from '../NewsItem/NewsItem'
import Grid from '../Layouts/Grid'

export const NewsBlock = ({news}) => {
    const newsRecords = news.records.slice(news.records.length - 2, news.records.length)
    
    return (
        <section className="container">
            <Grid>
                {
                    newsRecords.map(newsItem => {
                        return (
                            <NewsItem newsItem={newsItem} key={newsItem.id} />
                        )
                    })
                }
            </Grid>
        </section>
    )
}

NewsBlock.propTypes = {
    news: PropTypes.object.isRequired,
}


export default NewsBlock
