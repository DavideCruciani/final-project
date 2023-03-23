import React, { useState, useReducer } from 'react'
import BookingForm from './BookinForm'

export default function Reservations() {
  const [time, setTime] = useState("Select Time")
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  function updateTimes(state, action) {
    switch (action.type) {
      case "UPDATE_TIMES":
        const { date } = action.payload;
        const day = date.substring(8)
        if (day < 8) {
          return [
            '17:00',
            '18:00',
            '19:00',
          ];
        } else if (day < 15) {
          return [
            '20:00',
            '21:00',
            '22:00',
          ];
        } else {
          return [
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00',
            '22:00',
          ];
        }
      default:
        return state;
    }
  }

  function initializeTimes() {
    return [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
    ];
  }

  return (
    <section className='reservation-section'>
      <div className='section-center-c'>
        <div>
          <h1 className='reservations-title'>Reservations</h1>
        </div>
        <div>
          <BookingForm time={time} setTime={setTime} availableTimes={availableTimes} dispatch={dispatch}/>
        </div>
      </div>
    </section>
  )
}
