import React from 'react'
import ReservationImage1 from '../images/reservationchef.jpg'
import ReservationImage2 from '../images/restaurant.jpg'

export default function ReservationsImages() {
  return (
    <div className='section-center'>
        <img src={ReservationImage1} className='reservation-image1'/>
        <img src={ReservationImage2} className='reservation-image2'/>
    </div>
  )
}
