// import { useEffect, useState } from 'react';
import axios from 'axios';

export const updateUserFollow = async ({ userId, followed, users, setUsers }) => {
  // console.log('CL: ~ file: updateUserFollow.jsx:5 ~ setUsers:', setUsers);
  // const BACKEND = 'https://tweets-api.yurgo.fun/api';
  // const BACKEND = 'http://localhost:3009/api';
  const reversedFollowed = !followed;
  try {
    const user = await axios.patch(
      `${import.meta.env.VITE_BACKEND}/users/update/${userId}`,
      {
        followed: reversedFollowed,
      }
    );
    // console.log(
    //   'CL: ~ file: updateUserFollow.jsx:13 ~ user:',
    //   user.data.updatedUser
    // );

    // const index = users.findIndex((user) => user._id === userId);
    // console.log('CL: ~ file: updateUserFollow.jsx:25 ~ index:', index);

    // users[index] = user.data.updatedUser;
    // console.log('CL: ~ file: updateUserFollow.jsx:28 ~ users:', users);

    // const { users, pages } = response.data;

    // return await users;
    const updatedUsers = users.map((userItem) => {
      if (userItem._id === userId) {
        return user.data.updatedUser;
      }
      return userItem;
    });

    // return updatedUsers; 

    setUsers(updatedUsers);
  } catch (error) {
    console.log(error);
    // return error;
  }
};
