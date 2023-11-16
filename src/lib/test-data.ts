import type { AppState } from '@/@types';

export const INITIAL_STATE: AppState = {
  accounts: [
    {
      name: 'Chequing',
      purchases: [
        {
          type: 'Food',
          location: 'Tap and Barrel',
          date: 'Wednesday November 15, 2023',
          amount: 60.99,
          description: 'Drinks with friends',
        },
        {
          type: 'Food',
          location: 'Tap and Barrel',
          date: 'Wednesday November 15, 2023',
          amount: 150.99,
          description: 'Drinks with friends',
        },
        {
          type: 'Food',
          location: 'Nemesis Polygon',
          date: 'Wednesday November 15, 2023',
          amount: 23.99,
          description: 'Coffee',
        },
        {
          type: 'Transit',
          location: 'Translink',
          date: 'Tuesday November 14, 2023',
          amount: 23.99,
          description: 'Bus',
        },
      ],
    },
    {
      name: 'Savings',
      purchases: [
        {
          type: 'Food',
          location: 'Tap and Barrel',
          date: 'Wednesday November 15, 2023',
          amount: 60.99,
          description: 'Drinks with friends',
        },
        {
          type: 'Food',
          location: 'Tap and Barrel',
          date: 'Wednesday November 15, 2023',
          amount: 150.99,
          description: 'Drinks with friends',
        },
        {
          type: 'Food',
          location: 'Nemesis Polygon',
          date: 'Wednesday November 15, 2023',
          amount: 23.99,
          description: 'Coffee',
        },
        {
          type: 'Transit',
          location: 'Translink',
          date: 'Tuesday November 14, 2023',
          amount: 23.99,
          description: 'Bus',
        },
      ],
    },
    {
      name: 'Visa',
      purchases: [
        {
          type: 'Food',
          location: 'Tap and Barrel',
          date: 'Wednesday November 15, 2023',
          amount: 60.99,
          description: 'Drinks with friends',
        },
        {
          type: 'Food',
          location: 'Tap and Barrel',
          date: 'Wednesday November 15, 2023',
          amount: 150.99,
          description: 'Drinks with friends',
        },
        {
          type: 'Food',
          location: 'Nemesis Polygon',
          date: 'Wednesday November 15, 2023',
          amount: 23.99,
          description: 'Coffee',
        },
        {
          type: 'Transit',
          location: 'Translink',
          date: 'Tuesday November 14, 2023',
          amount: 23.99,
          description: 'Bus',
        },
      ],
    },
  ],
  contacts: [
    {
      name: 'Jacob',
      email: 'jacob@email.com',
      phone: '555 555 1234',
      avatar: '',
    },
    {
      name: 'Victor',
      email: 'victor@email.com',
      phone: '555 555 1234',
      avatar: '',
    },
    {
      name: 'Chris',
      email: 'chris@email.com',
      phone: '555 555 1234',
      avatar: '',
    },
    {
      name: 'LTJ Bukem',
      email: 'ltj@email.com',
      phone: '555 555 1234',
      avatar: '',
    },
    {
      name: 'Stevie Hyper D',
      email: 'stevieh@email.com',
      phone: '555 555 1234',
      avatar: '',
    },
  ],
  selectedSplitContacts: [],
};
