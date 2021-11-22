import PropTypes from 'prop-types'
import classes from './new-block.module.css'

const NewsBlock = ({newsitem}) => {
    return (
        <div>
            Item
        </div>
    )
}

NewsBlock.propTypes = {
    newsitem: PropTypes.object.isRequired
}


export default NewsBlock
