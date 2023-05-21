// import { useEffect, useState } from 'react';
import axios from 'axios';

// console.log('~`${import.meta.env.VITE_TOKEN}` fetchUsers.jsx [4]:', `${import.meta.env.VITE_TOKEN}`);

axios.defaults.headers.common['Authorization'] = `Bearer ${import.meta.env.VITE_TOKEN}`;

export const fetchUsers = async (page, setUsers, setTotalPages) => {
  // const BACKEND = 'https://tweets-api.yurgo.fun/api';
  // const BACKEND = 'http://localhost:3009/api';
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND}/users/${page}`
    );


    const { users, pages } = response.data;

    setUsers(users);
    setTotalPages(pages);
  } catch (error) {
    console.log(error);
    // return error;
  }
};
