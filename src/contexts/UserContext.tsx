import { createContext } from "react";
import type { User } from '../types/user';
import { defaultUser } from '../constants/defaultUser';

interface UserProps {
    user: User; // User Data
    setUser: React.Dispatch<React.SetStateAction<User>>; // Function to Update User Data
}

export const UserContext = createContext<UserProps>({ user: defaultUser, setUser: () => {} });
