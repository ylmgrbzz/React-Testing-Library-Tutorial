import { useState, useEffect } from "react";

export const Users = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.map((user: { name: string }) => user.name)))
      .catch(() => setError("Error fetching users"));
  }, []);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch(
  //           "https://jsonplaceholder.typicode.com/users"
  //         );
  //         if (!response.ok) {
  //           throw new Error("Error fetching users");
  //         }
  //         const data = await response.json();
  //         setUsers(data.map((user: { name: string }) => user.name));
  //       } catch (error: any) {
  //         setError(error.message);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  return (
    <div>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};
