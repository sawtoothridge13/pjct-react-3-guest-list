import { Fragment, useEffect, useState } from 'react';
import styles from './App.module.scss';

export default function App() {}
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
