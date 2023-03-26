import React from 'react'
import ReservationsImages from './ReservationsImages'

export default function ConfirmedBooking() {
  return (
    <>
    <section className='reservation-section'>
      <div className='section-center-c'>
        <div>
          <h1 className='reservations-title'>Reservation Confirmed</h1>
        </div>
        <div>
          <p className='congratulations'>Congratulations on securing your reservation at Little Lemon, the Mediterranean restaurant known for its delicious and authentic cuisine! We're excited to have you join us for what promises to be a truly memorable dining experience.</p>
        </div>
      </div>
    </section>
    <section className='reservation-section-2'>
      <ReservationsImages />
    </section>
    </>
  )
}
