import React from 'react'
import ReservationImage1 from '../images/reservationchef.jpg'
import ReservationImage2 from '../images/restaurant.jpg'

export default function ReservationsImages() {
  return (
    <div className='section-center'>
        <img src={ReservationImage1} alt='a Chef preparing a plate' className='reservation-image1'/>
        <img src={ReservationImage2} alt='the outdoor seatings of the restaurant' className='reservation-image2'/>
    </div>
  )
}
