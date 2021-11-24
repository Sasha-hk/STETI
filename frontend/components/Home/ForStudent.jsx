import PropTypes from 'prop-types'
import Panel from '../Panel/Panel'
import Grid from '../Layouts/Grid'


const ForStudent = ({forStudents}) => {
    if (forStudents) {
        return (
            <section className="container">
                <h1>Студенту</h1>
                <Grid>
                    {
                        forStudents.records.map(forStudent => {
                            return (
                                <Panel title={forStudent.title} date={forStudent.pub_date} key={forStudent.id} />
                            )
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

ForStudent.propTypes = {
    forStudents: PropTypes.object,
}


export default ForStudent
