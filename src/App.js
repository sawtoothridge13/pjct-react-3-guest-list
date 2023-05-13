import { useState } from 'react';
import styles from './App.module.scss';

export default function App() {
  /*   const baseUrl = 'http://localhost:4000';

  const response = await fetch(`${baseUrl}/guests`);

  const allGuests = await response.json();

  const response = await fetch(`${baseUrl}/guests`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ firstName: 'Karl', lastName: 'Horky' }),
  });

  const createdGuest = await response.json();

  const response = await fetch(`${baseUrl}/guests/1`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ attending: true }),
  });

  const updatedGuest = await response.json();

  const response = await fetch(`${baseUrl}/guests/1`, { method: 'DELETE' });

const deletedGuest = await response.json(); */

  // 1. Create state for input data
  const [attendingStatus, setAttendingStatus] = useState(false);

  // don't use document.querySelector or document.getElementById

  return (
    <div className={styles.App}>
      <header>
        <h1>Guest List App</h1>
      </header>

      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label>
          First name
          <input />
        </label>
        <br />
        <label>
          Last name
          <input />
          {/* <kbd>Return</kbd> */}
        </label>

        <h2>Guests</h2>

        {attendingStatus}
        <label aria-label="attending status">
          Attending
          {/* // 2. use the current 'checked' (only for checkboxes, otherwise 'value') of the state as the value of the input */}
          <input
            checked={attendingStatus}
            type="checkbox"
            // 3. update the state value with the event.currentTarget.value
            onChange={(event) => {
              setAttendingStatus(event.currentTarget.checked);
            }}
          />
        </label>
        <button>Test</button>
      </form>
    </div>
  );
}
