import PropTypes from 'prop-types'
import { Panel, PanelWrapper } from '../Panel/Panel'


const ForStudent = () => {
    return (
        <section className="container">
            <h1>Студенту</h1>
            <PanelWrapper>
                <Panel title='Hello panel' href="asdf" date="12.22.2022" />
                <Panel title='Hello panel' date="12.22.2022" />
                <Panel title='Hello panel' date="12.22.2022" />
                <Panel title='Hello panel' date="12.22.2022" />
            </PanelWrapper>
        </section>
    )
}


export default ForStudent
