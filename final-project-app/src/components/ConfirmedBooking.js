import React from 'react'
import ReservationsImages from './ReservationsImages'

export default function ConfirmedBooking() {
  return (
    <>
    <section className='reservation-section'>
      <div className='section-center-c'>
        <div>
          <h1 className='reservations-title'>Reservations Confirmed</h1>
        </div>
        <div>
          <p>Well Done!!!</p>
        </div>
      </div>
    </section>
    <section className='reservation-section-2'>
      <ReservationsImages />
    </section>
    </>
  )
}
