import React, { useState } from "react";

export default function BookingForm({ time, setTime, availableTimes, dispatch}) {
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("Select Occasion");
  const [date, setDate] = useState("");

  const handleChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate)
    dispatch({ type: "UPDATE_TIMES", payload: {date: newDate} })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation("")
    setDate("")
    setGuests("")
    setOccasion("Select Occasion")
    setTime("Select Time")
  }

  return (
    <form onSubmit={handleSubmit}>
            <div className='radio-container'>

              <div>
                <label htmlFor='indoor' className='radio-label'>Indoor seating</label>
                <input type='radio' id='indoor' className='radio-input' value='indoor' onChange={e => setLocation(e.target.value)} name='seating'></input>
              </div>
              <div>
                <label htmlFor='outdoor' className='radio-label'>Outdoor seating</label>
                <input type='radio' id='outdoor' className='radio-input' value='outdoor' onChange={e => setLocation(e.target.value)} name='seating'></input>
              </div>

            </div>


            <div className='inputs-container'>

              <div>
                <label htmlFor='res-date' className='inputs-label'>Date</label>
                <div>
                  <input type="date" id='res-date' value={date} onChange={handleChange}/>
                </div>
              </div>

              <div>
              <label htmlFor='guests' className='inputs-label'>Numbers of dinners</label>
                <div>
                  <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)} />
                </div>
              </div>

              <div>
                <label htmlFor="occasion" className='inputs-label'>Occasion</label>
                <div>
                  <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                      <option disabled>Select Occasion</option>
                      <option value="Birthday">Birthday</option>
                      <option value="Anniversary">Anniversary</option>
                      <option value="Engagment">Engagment</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="res-time" className='inputs-label'>Choose time</label>
                <div>
                <select id="res-time" value={time} onChange={e => setTime(e.target.value)}>
                  <option selected disabled>Select Time</option>
                  {availableTimes.map((availableTime) => (
                    <option key={availableTime} value={availableTime}>
                      {availableTime}
                    </option>
                  ))}
                </select>
                </div>
              </div>

            </div>
            <div className='submit-container'>
            <input type="submit" value="Make Your reservation" className='submit-button'></input>
            </div>
          </form>
  )
}