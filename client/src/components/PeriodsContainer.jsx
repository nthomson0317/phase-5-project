import React from 'react'
import Period from './Period'

//REDUX
import { connect } from 'react-redux'

 function PeriodsContainer(props) {
    console.log(props)
    let arrOfPeriods = props.periods.map(period => <Period key={period.id} period={period}/>)
    return (
        <div>
            <p>Periods</p>
            
        </div>
    )
}

//connect is a function that returns a function definition
    // connect also takes in a function definition (callbacks)

    // Return value of MSTP is a POJO that'll be merged into props
    let mapStateToProps = (globalState) => {
        return {
            periods: globalState.periodInfo.periods
        }
    }
export default connect(mapStateToProps)(PeriodsContainer) 