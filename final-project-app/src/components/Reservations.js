import React, { useState, useReducer, useEffect } from 'react'
import BookingForm from './BookinForm'
import ReservationsImages from './ReservationsImages';
import { fetchAPI, submitAPI } from '../apis/apis';
import { useNavigate } from 'react-router-dom';

export function initializeTimes() {
  const today = new Date()
  const todayDay = today.getDate()
  return fetchAPI(todayDay)
}

export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      const { date } = action.payload;
      return fetchAPI(date.substring(8));
    default:
      return state;
  }
}

export default function Reservations() {
  const [time, setTime] = useState("Select Time")
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  function submitForm(formData) {
    submitAPI(formData)
    navigate('/ConfirmedBooking')
  }

  return (
    <>
    <section className='reservation-section'>
      <div className='section-center-c'>
        <div>
          <h1 className='reservations-title'>Reservations</h1>
        </div>
        <div>
          <BookingForm submitForm={submitForm} time={time} setTime={setTime} availableTimes={availableTimes} dispatch={dispatch}/>
        </div>
      </div>
    </section>
    <section className='reservation-section-2'>
      <ReservationsImages />
    </section>
    </>
  )
}
