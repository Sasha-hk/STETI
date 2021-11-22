import PropTypes from 'prop-types'
import Panel from '../Panel/Panel'
import Grid from '../Layouts/Grid'


const ForStudent = () => {
    return (
        <section className="container">
            <h1>Студенту</h1>
            <Grid>
                <Panel title='Hello panel' href="asdf" date="12.22.2022" />
                <Panel title='Hello panel' date="12.22.2022" />
                <Panel title='Hello panel' date="12.22.2022" />
                <Panel title='Hello panel' date="12.22.2022" />
            </Grid>
        </section>
    )
}


export default ForStudent
