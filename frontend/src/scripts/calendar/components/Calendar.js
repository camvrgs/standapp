/**
 *  ++=================++
 *  ||  StandCalendar  ||
 *  ++=================++
 *  ++==========================++
 *  ||  JS Module  |  calendar  ||
 *  ++==========================++
 *
 *  calendar/.
 *  components/.
 *  Calendar.js
 *
 *  Sample Calendar
 *
 *  +-------------------------------+
 *  |  generated by Cameron Vargas  |
 *  +-------------------------------+
 *
 **/

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BigCalendar from 'react-big-calendar'
import moment from 'moment'

// init moment
BigCalendar.momentLocalizer(moment)

class Calendar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      events: [
        {
          start: new Date(),
          end: new Date(moment().add(1, 'days')),
          title: 'Some title'
        }
      ]
    }

    this.handleEvent = this.handleEvent.bind(this)
  }

  handleEvent () {
    this.props.handleEvent()
  }

  render () {
    return (
      <div className={this.props.style}>
        <BigCalendar
          defaultDate={new Date()}
          defaultView='month'
          events={this.state.events}
          resizable
          style={{ height: '100vh' }}
        />
      </div>
    )
  }
}

Calendar.propTypes = {
  style: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]),

  // pass down methods
  handleEvent: PropTypes.func
}

Calendar.defaultProps = {
  style: 'big-cal',
  handleEvent: () => {}
}

export default Calendar