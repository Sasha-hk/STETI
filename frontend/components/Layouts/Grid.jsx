import PropTypes from 'prop-types'
import classes from './grid.module.css'


const Grid = ({children}) => {
    return (
        <div className={classes.grid}>
            {children}
        </div>
    )
}

Grid.propTypes = {
    children: PropTypes.node.isRequired
}


export default Grid
