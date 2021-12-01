import PropTypes from 'prop-types'
import Link from 'next/link'
import Grid from '../../components/Layouts/Grid.jsx'
import { useRouter } from 'next/router'

import classes from './library-view.module.css'

export const LibraryView = ({library}) => {
    const router = useRouter()

    console.log(library)

    return (
        <Link href={router.pathname + '/' + library.slug} key={library.slug}>
            <a>
                <div className={classes.library_view}>
                    {
                        library.background && (
                            <div className={classes.image_wrapper}>
                                <img src={library.background} alt={library.category_name} />
                                <div className={classes.image_filter}></div>
                            </div>
                        )
                    }
                    <div className={classes.library_name}>
                        <h3
                            style={
                                library.background && {
                                    color: 'var(--color-revert)'
                                }
                            }
                        >{library.category_name}</h3>
                    </div>
                </div>
            </a>
        </Link>
    )
}

LibraryView.propTypes = {
    library: PropTypes.object.isRequired,
}


export const LibraryBlock = ({library, title}) => {
    return (
        <section className="container">
            {
                title && <h2>{title}</h2>
            }
            <Grid>
                {
                    library.map(item => {
                        return (
                            <LibraryView 
                                key={item.id} 
                                library={item}
                            />
                        )
                    })
                }
            </Grid>
        </section>
    )
}

LibraryBlock.propTypes = {
    library: PropTypes.object.isRequired,
    title: PropTypes.string,
}

 