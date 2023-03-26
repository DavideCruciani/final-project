import React, { useState } from "react";

export default function BookingForm({ time, setTime, availableTimes, dispatch, submitForm}) {
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
    var today = new Date();
    if (location === "" || guests === "" || occasion === "" || date === "Select Occasion" || time === "Select Time" || date < today) {
      return
    } else {
    submitForm(location, guests, occasion, date, time)
    setLocation("")
    setDate("")
    setGuests("")
    setOccasion("Select Occasion")
    setTime("Select Time")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
            <div className='radio-container'>

              <div>
                <label htmlFor='indoor' className='radio-label'>Indoor seating</label>
                <input type='radio' id='indoor' required className='radio-input' checked={location === 'indoor'} value='indoor' onChange={e => setLocation(e.target.value)} name='seating'></input>
              </div>
              <div>
                <label htmlFor='outdoor' className='radio-label'>Outdoor seating</label>
                <input type='radio' id='outdoor' required className='radio-input' checked={location === 'outdoor'} value='outdoor' onChange={e => setLocation(e.target.value)} name='seating'></input>
              </div>

            </div>


            <div className='inputs-container'>

              <div>
                <label htmlFor='res-date' className='inputs-label'>Date</label>
                <div>
                  <input type="date" id='res-date' required value={date} onChange={handleChange} min={new Date().toISOString().split("T")[0]}/>
                </div>
              </div>

              <div>
              <label htmlFor='guests' className='inputs-label'>Numbers of dinners</label>
                <div>
                  <input type="number" placeholder="1" min="1" max="10" id="guests" required value={guests} onChange={e => setGuests(e.target.value)} />
                </div>
              </div>

              <div>
                <label htmlFor="occasion" className='inputs-label'>Occasion</label>
                <div>
                  <select id="occasion" name="occasion" value={occasion} required onChange={e => setOccasion(e.target.value)}>
                      <option value="">Select Occasion</option>
                      <option value="Birthday">Birthday</option>
                      <option value="Anniversary">Anniversary</option>
                      <option value="Engagment">Engagment</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="res-time" className='inputs-label'>Choose time</label>
                <div>
                <select id="res-time" name="time" value={time} required onChange={e => setTime(e.target.value)}>
                  <option value="">Select Time</option>
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
            <input type="submit" value="Make Your reservation" required className='submit-button'></input>
            </div>
          </form>
  )
}