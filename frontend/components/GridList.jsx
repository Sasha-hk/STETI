import PropTypes from 'prop-types'
import Panel from './Panel/Panel'
import Grid from './Layouts/Grid'

import { useRouter } from 'next/router'
import Link from 'next/link' 
import PanelNothing from './Panel/PanelNothing'


const GridList = ({items, title, helpURL}) => {
    const router = useRouter()

    if (items.length != 0) {
        return (
            <section className="container">
                {
                    title && <h2>{title}</h2>
                }
                <Grid>
                    {
                        items.map(panelItem => {
                            if (panelItem.link) {
                                if (panelItem.link.includes('http')) {
                                    return (
                                        <Link href={panelItem.link} key={panelItem.id} >
                                            <a target="_blank">
                                                <Panel title={panelItem.title} date={panelItem.pub_date} />
                                            </a>
                                        </Link>
                                    )
                                }
                            }
                            else {
                                if (helpURL) {
                                    return (
                                        <Link href={helpURL + '/' + panelItem.slug} key={panelItem.id} >
                                            <a>
                                                <Panel title={panelItem.title} date={panelItem.pub_date} />
                                            </a>
                                        </Link>
                                    )
                                }
                                return (
                                    <Link href={router.pathname + '/' + panelItem.slug} key={panelItem.id} >
                                        <a>
                                            <Panel title={panelItem.title} date={panelItem.pub_date} />
                                        </a>
                                    </Link>
                                )
                            }
                        })
                    }
                </Grid>
            </section>
        )   
    } 
    else {
        return (
            <section className="container">
                {
                    title && <h2>{title}</h2>
                }
                
                <PanelNothing />
            </section>
        )
    }
}

GridList.propTypes = {
    items: PropTypes.object,
    items: PropTypes.array,
    title: PropTypes.string,
    helpURL: PropTypes.string,
}


export default GridList
