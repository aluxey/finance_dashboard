import React, { useEffect, useState } from "react";
import { auth } from "../firebase"; // Adjust the path as needed
import { onAuthStateChanged } from "firebase/auth";
import '../style/settings.css';

const Settings = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="settings">
            <h1>User Settings</h1>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>UID:</strong> {user.uid}</p>
            {/* Add more user info here if needed */}
        </div>
    );
};

export default Settings;
