import { User } from '../hooks/useFormStore';

const fetchUsers = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);
  const data = await res.json();
  return data;
};

const createUser = async (user: User) => {
  console.log('user', user);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const data = await res.json();

  console.log('data', data);

  return data;
};

const deleteUser = async (id: number) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, {
      method: 'DELETE',
    });

    if (!res.ok) {
      throw new Error(`Failed to delete user with ID ${id}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

export { fetchUsers, createUser, deleteUser };
