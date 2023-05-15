import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './App.module.scss';

function App() {
  const [guests, setGuests] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:4000')
      .then((response) => {
        setGuests(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleAddGuest = (event) => {
    event.preventDefault();
    const newGuest = {
      firstName: firstName,
      lastName: lastName,
      attending: false,
    };
    axios
      .post('http://localhost:4000/guests', newGuest)
      .then((response) => {
        setGuests([...guests, response.data]);
        setFirstName('');
        setLastName('');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteGuest = (id) => {
    axios
      .delete(`https://my-api.com/guests/${id}`)
      .then(() => {
        setGuests(guests.filter((guest) => guest.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleToggleAttending = (id) => {
    const updatedGuests = guests.map((guest) => {
      if (guest.id === id) {
        return {
          ...guest,
          attending: !guest.attending,
        };
      } else {
        return guest;
      }
    });
    axios
      .put(
        `https://my-api.com/guests/${id}`,
        updatedGuests.find((guest) => guest.id === id),
      )
      .then(() => {
        setGuests(updatedGuests);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.App}>
      <form onSubmit={handleAddGuest}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <label htmlFor="lastName">Last Name</label>
      </form>
    </div>
  );
}
export default App;

/* import { Fragment, useEffect, useState } from 'react';
import styles from './App.module.scss'; */

// Create state variables
/* const [guestList, setGuestList] = useState([]);
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [loading, setLoading] = useState(''); */

// // Base URL
// const baseUrl = 'http://localhost:4000';

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

// export default function App() {
/*  const [allGuests, setAllGuests] = useState([]);
  const [newGuest, setNewGuest] = useState(''); */

/*   // 1. Create state for input data checkbox
  const [attendingStatus, setAttendingStatus] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // Base URL
  const baseUrl = 'http://localhost:4000';

  // Getting all guests (aka GET /guests)
  async function getGuestList() {
    const response = await fetch(`${baseUrl}/guests`);
    const allGuests = await response.json();
  }

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
          <input
            value={firstName}
            name="firstName"
            onChange={(event) => setFirstName(event.currentTarget.value)}
          />
        </label>
        <br />
        <label>
          Last name
          <input
            value={lastName}
            name="lastName"
            onChange={(event) => setLastName(event.currentTarget.value)}
          />
          <kbd>Return</kbd>
        </label>

        <h2>Guests</h2>
        {attendingStatus}
        <label aria-label="attending status">
          Attending
          <input
            checked={attendingStatus}
            type="checkbox"
            // 3. update the state value with the event.currentTarget.value
            onChange={(event) => {
              setAttendingStatus(event.currentTarget.checked);
            }}
          />
          {firstName !== '' && <p>Guest Name: {firstName}</p>}
        </label>
      </form>
    </div>
  );
} */
