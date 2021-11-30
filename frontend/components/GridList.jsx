import PropTypes from 'prop-types'
import Panel from './Panel/Panel'
import Grid from './Layouts/Grid'

import { useRouter } from 'next/router'
import Link from 'next/link' 


const GridList = ({items, title}) => {
    const router = useRouter()

    if (items) {
        return (
            <section className="container">
                {
                    title && <h2>{title}</h2>
                }
                <Grid>
                    {
                        items.records.map(panelItem => {
                            if (panelItem.link) {
                                console.log(panelItem.link)
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
        return null
    }
}

GridList.propTypes = {
    items: PropTypes.object,
    title: PropTypes.string,
}


export default GridList
