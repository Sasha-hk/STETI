import PropTypes from 'prop-types'
import classes from './panel.module.css'


export const Panel = ({title, href, date}) => {
    if (href) {
        return (
            <div className={classes.panel_outside}>
                <a href={href}>
                    <div className={classes.panel}>
                        <span>{title}</span>
                        <span>{date}</span>
                    </div>
                </a>
            </div>
        )
    }
    else {
        return (
            <div className={classes.panel_outside}>
                <div className={classes.panel}>
                    <span>{title}</span>
                    <span>{date}</span>
                </div>
            </div>
        )
    }
}

export const PanelWrapper = ({children}) => {
    return (
        <div className={classes.panel_wrapper}>
            {children}
        </div>
    )
}

Panel.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string,
    date: PropTypes.string,
}

PanelWrapper.propTypes = {
    children: PropTypes.node.isRequired,
}
