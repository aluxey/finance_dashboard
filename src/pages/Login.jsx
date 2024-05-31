import { useState } from "react";
import "../style/login.css";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // Adjust the path as needed

const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const navigate = useNavigate();
    const [createAcc, setCreateAcc] = useState(true);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(false);
        console.log("Attempting to log in");
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Login successful");
            navigate("/settings"); // Redirect to home or desired page after login
        } catch (err) {
            console.error("Login failed", err);
            setError(true);
        }
    };

    const changeCreate = () => {
        setCreateAcc(!createAcc);
        console.log("Toggled form state");
    };

    const createAccountFirebase = async (e) => {
        e.preventDefault();
        setError(false);
        console.log("Attempting to create account");
        if (password !== repeatPassword) {
            console.error("Passwords do not match");
            setError(true);
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("Account creation successful");
            navigate("/settings"); // Redirect to home or desired page after account creation
        } catch (err) {
            console.error("Account creation failed", err);
            setError(true);
        }
    };

    return (
        <div className="login">
            {createAcc ? (
                <div className='create'>
                    <form onSubmit={createAccountFirebase}>
                        <input
                            type="email"
                            placeholder="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="repeat password"
                            value={repeatPassword}
                            onChange={(e) => setRepeatPassword(e.target.value)}
                        />
                        <button type="submit">Create Account</button>
                        <button type="button" onClick={changeCreate}>Login</button>
                        {error && <span>Failed to create account or passwords do not match!</span>}
                    </form>
                </div>
            ) : (
                <div className='created'>
                    <form onSubmit={handleLogin}>
                        <input
                            type="email"
                            placeholder="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit">Login</button>
                        <button type="button" onClick={changeCreate}>Create Account</button>
                        {error && <span>Wrong email or password!</span>}
                    </form>
                </div>
            )}
        </div>
    );
};

export default Login;
