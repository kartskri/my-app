import React from "react";
import axios from "axios";

interface User {
    id: number;
    name: string;
    email: string;
}
export default function About() {
    const [users, setUsers] = React.useState<User[]>([]);
    React.useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
                return response.data;
            } catch (error) {
                console.error(error);
            }
        }
        fetchUsers().then(r => console.log(r));
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    );
}