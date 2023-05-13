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

  return (
    <div className={styles.App}>
      <header>
        <h1>Guest List App</h1>
      </header>
      <form>
        <label>
          First name
          <input />
        </label>
        <label>
          Last name
          <input />
        </label>
      </form>
    </div>
  );
}
