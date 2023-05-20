// import { useEffect, useState } from 'react';
import axios from 'axios';

export const fetchUsers = async (page, setUsers, setTotalPages) => {
  // const BACKEND = 'https://tweets-api.yurgo.fun/api';
  const BACKEND = 'http://localhost:3009/api';
  try {
    const response = await axios.get(`${BACKEND}/users/${page}`);
    // console.log(
    //   '~response.data.users fetchUsers.jsx [11]:',
    //   response.data
    // );

    const { users, pages } = response.data;

    setUsers(users);
    setTotalPages(pages);
  } catch (error) {
    console.log(error);
    // return error;
  }
};
