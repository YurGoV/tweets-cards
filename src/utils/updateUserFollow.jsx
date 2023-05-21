import axios from 'axios';

export const updateUserFollow = async ({
  userId,
  followed,
  users,
  setUsers,
}) => {
  const reversedFollowed = !followed;
  try {
    const user = await axios.patch(
      `${import.meta.env.VITE_BACKEND}/users/update/${userId}`,
      {
        followed: reversedFollowed,
      }
    );

    const updatedUsers = users.map((userItem) => {
      if (userItem._id === userId) {
        return user.data.updatedUser;
      }
      return userItem;
    });

    setUsers(updatedUsers);
  } catch (error) {
    console.log(error);
  }
};
