import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    appointmentList: [],
    title: '',
    date: '',
    star: false,
    showStarredOnly: false,
  }

  onChangeSearch = event => {
    console.log(event.target.value)
    this.setState({
      title: event.target.value,
    })
  }

  onChangeDate = event => {
    const selectedDate = event.target.value
    console.log(selectedDate)
    this.setState({
      date: selectedDate,
    })
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {appointmentList, title, date} = this.state
    if (title && date) {
      const newAppointment = {
        id: uuidv4(),
        title,
        date,
        star: false,
      }
      this.setState({
        title: '',
        date: '',
        appointmentList: [...appointmentList, newAppointment],
      })
    }
  }

  onStarredToggle = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(each =>
        each.id === id ? {...each, star: !each.star} : each,
      ),
    }))
  }

  starredList = () => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.filter(each => each.star),
    }))
  }

  toggleStarredView = () => {
    this.setState(prevState => ({
      showStarredOnly: !prevState.showStarredOnly,
    }))
  }

  render() {
    const {appointmentList, title, date, showStarredOnly} = this.state
    const activeappointmentList = showStarredOnly
      ? appointmentList.filter(each => each.star)
      : appointmentList
    const activeStar = showStarredOnly ? 'activebtn' : 'starBtn'
    return (
      <div className="bg-container">
        <div className="card">
          <div className="separatingCard">
            <form
              className="appointmentDetails"
              onSubmit={this.onAddAppointment}
            >
              <h1 className="heading">Add Appointment</h1>
              <label htmlFor="Title" className="span">
                TITLE
              </label>
              <input
                id="Title"
                className="input-text"
                type="text"
                placeholder="Title"
                value={title}
                onChange={this.onChangeSearch}
              />

              <br />
              <label htmlFor="Date" className="span">
                DATE
              </label>
              <input
                id="Date"
                className="input-text"
                type="date"
                value={date}
                onChange={this.onChangeDate}
              />
              <br />
              <button type="submit" className="btn">
                Add
              </button>
            </form>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="appointImg"
              />
            </div>
          </div>
          <hr className="hline" />
          <div className="appointment-heading">
            <h1 className="smallHead">Appointments</h1>
            <button
              type="button"
              className={activeStar}
              onClick={this.toggleStarredView}
            >
              Starred
            </button>
          </div>
          <ul className="appointList">
            {activeappointmentList.map(each => (
              <AppointmentItem
                key={each.id}
                listDetails={each}
                onStarred={this.onStarredToggle}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
