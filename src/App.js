import { Fragment, useEffect, useState } from 'react';
import styles from './App.module.scss';

// Create state variables
/* const [guestList, setGuestList] = useState([]);
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [loading, setLoading] = useState(''); */

// Base URL
const baseUrl = 'http://localhost:4000';

/* // Getting all guests (aka GET /guests)
const response = await fetch(`${baseUrl}/guests`);

const allGuests = await response.json();

// Getting a single guest (aka GET /guests/:id)
const response = await fetch(`${baseUrl}/guests/:id`);
const guest = await response.json();

// Creating a new guest (aka POST /guests)
const response = await fetch(`${baseUrl}/guests`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ firstName: 'Karl', lastName: 'Horky' }),
});
const createdGuest = await response.json();

// Updating a guest (aka PUT /guests/:id)
const response = await fetch(`${baseUrl}/guests/1`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ attending: true }),
});
const updatedGuest = await response.json();

// Deleting a guest (aka DELETE /guests/:id)
const response = await fetch(`${baseUrl}/guests/1`, { method: 'DELETE' });
const deletedGuest = await response.json(); */

export default function App() {
  return (
    <div className={styles.App}>
      <main>
        <header>Guest List</header>
        <div>
          <label>
            First name
            <input />
          </label>
          <label>
            Last name
            <input />
          </label>
        </div>
        <div>Guests</div>
      </main>
    </div>
  );
}
/*   // 1. Create state for input data checkbox
  const [attendingStatus, setAttendingStatus] = useState(false);
  const [firstName, setFirstName] = useState('false');

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
          <input
            value={firstName}
            name="firstName"
            onChange={(event) => setFirstName(event.currentTarget.value)}
          />
          <kbd>Return</kbd>
        </label>

        <h2>Guests</h2>
        {attendingStatus}
        <label aria-label="attending status">
          Attending
          {/* // 2. use the current 'checked' (only for checkboxes, otherwise 'value') of the state as the value of the input }*/
/*           <input
            checked={attendingStatus}
            type="checkbox"
            // 3. update the state value with the event.currentTarget.value
            onChange={(event) => {
              setAttendingStatus(event.currentTarget.checked);
            }}
          />
          {firstName !== '' && <p>Username: {firstName}</p>}
        </label>
      </form>
    </div>
  );
} */
