import PropTypes from 'prop-types'
import Link from 'next/link'

import { API_URL_FOR_STUDENTS, API_URL_FOR_ENTRANTS } from '../config/APIUrls.js'
import { combineUrl } from '../config/utils'


export default function Footer({footer}) {
    return (
        <footer className="centralize">
            <div className="container">
                <div className="partners">
                    {
                        footer.partners.records.map(partner => {
                            return (
                                <div className="partner-item" key={partner.id}>
                                    <Link href={partner.link ? partner.link : '#'}>
                                        <a target="blank_">
                                            <img src={partner.image} alt={partner.name}/>
                                        </a>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="useful-links">
                    {
                        footer.usefulLinks.records.map(item => {
                            return (
                                <div className="useful-wrapper" key={item.id}>
                                    <b className='text-overflow'>{item.group_name}</b>
                                    {
                                        item.resource.map(resourdeItem => {
                                            let resourceLink
                                            if (resourdeItem.own_link) {
                                                resourceLink = resourdeItem.own_link
                                            }
                                            else if (resourdeItem.for_students) {
                                                if (resourdeItem.for_students.link) {
                                                    resourceLink = resourdeItem.for_students.link
                                                }
                                                else if (resourdeItem.for_students.slug) {
                                                    resourceLink = combineUrl({baseUrl: API_URL_FOR_STUDENTS, parts: [resourdeItem.for_students.slug]})
                                                }
                                                else {
                                                    resourceLink = '/'
                                                }
                                            } 
                                            else if (resourdeItem.for_entrants) {
                                                if (resourdeItem.for_entrants.link) {
                                                    resourceLink = resourdeItem.for_students.link
                                                }
                                                else if (resourdeItem.for_entrants.slug !== null) {
                                                    resourceLink = combineUrl({baseUrl: API_URL_FOR_ENTRANTS, parts: [resourdeItem.for_entrants.slug]})
                                                }
                                                else {
                                                    resourceLink = '/'
                                                }
                                            }
                                            return (
                                                <Link
                                                    href={resourceLink}
                                                    key={resourdeItem.id}
                                                >
                                                    <a className='text-overflow'>{resourdeItem.name}</a>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>

                <div className="copyright-block">
                    <span>
                        ?????????????????? ?????????? ?? 2013 - 2021 ?????????????????????? ???????????????? ?????????????????? ???? ??????????????????????. ?????? ?????????? ????????????????.
                    </span>
                </div>

            </div>
        </footer>
    )
}

Footer.propTypes = {
    footer: PropTypes.object.isRequired,
}
