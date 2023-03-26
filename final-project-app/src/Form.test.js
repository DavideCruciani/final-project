import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import BookingForm from './components/BookinForm';

describe('BookingForm', () => {
  it('renders radio buttons with the required attribute', () => {
    render(<BookingForm />);
    const indoorRadio = screen.getByRole('radio', { name: /Indoor seating/i });
    const outdoorRadio = screen.getByRole('radio', { name: /Outdoor seating/i });
    const selectDate = screen.getByLabelText('Date')
    const selectGuests = screen.getByLabelText('Numbers of dinners')
    const selectOccasion = screen.getByLabelText('Occasion')
    const selectTime = screen.getByLabelText('Choose time')
    expect(indoorRadio).toHaveAttribute('required');
    expect(outdoorRadio).toHaveAttribute('required');
    expect(selectDate).toHaveAttribute('required');
    expect(selectDate).toHaveAttribute('min');
    expect(selectGuests).toHaveAttribute('required');
    expect(selectGuests).toHaveAttribute('min');
    expect(selectGuests).toHaveAttribute('max');
    expect(selectOccasion).toHaveAttribute('required');
    expect(selectTime).toHaveAttribute('required');
  });
});