import axios from 'axios';

axios.defaults.headers.common['Authorization'] = `Bearer ${import.meta.env.VITE_TOKEN}`;

export const fetchUsers = async (page, setUsers, setTotalPages) => {
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
