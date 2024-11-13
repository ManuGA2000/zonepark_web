import React, { useState } from 'react';
import { auth, googleProvider } from './Firebase';
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import './LoginModal.css';

function LoginModal() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const hideLoginPopup = () => {
        document.querySelector('.overlay').classList.remove('visible');
    };

    const toggleSignUp = () => {
        setIsSignUp((prev) => !prev);
        setEmail('');
        setPassword('');
        setName('');
        setError('');
    };

    const handleAuth = async () => {
        setError(''); // Clear error state before starting
        try {
            if (isSignUp) {
                // Sign Up with Email and Password
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                await updateProfile(userCredential.user, { displayName: name });
                alert('Sign Up Successful!');
            } else {
                // Sign In with Email and Password
                await signInWithEmailAndPassword(auth, email, password);
                alert('Sign In Successful!');
            }
            hideLoginPopup();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setError('This email is already in use. Please try signing in.');
            } else {
                setError(`Error: ${error.message}`);
            }
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            alert('Google Sign-In Successful!');
            hideLoginPopup();
        } catch (error) {
            setError(`Google Sign-In Error: ${error.message}`);
        }
    };

    return (
        <div className="overlay visible">
            <div className="login-popup">
                <button className="close-button" onClick={hideLoginPopup}>X</button>
                <h2>{isSignUp ? 'Create an Account' : 'Welcome Back'}</h2>
                
                {error && <p className="error-message">{error}</p>}

                <input
                    type="text"
                    placeholder="Email address or phone number"
                    className="input-field"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {isSignUp && (
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="input-field"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                )}

                <input
                    type="password"
                    placeholder="Password"
                    className="input-field"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="continue-button" onClick={handleAuth}>
                    {isSignUp ? 'Sign Up' : 'Continue'}
                </button>

                <p>
                    {isSignUp ? "Already have an account?" : "Don't have an account?"}
                    <span className="toggle-link" onClick={toggleSignUp}>
                        {isSignUp ? ' Sign In' : ' Sign Up'}
                    </span>
                </p>

                <div className="divider">
                    <hr className="divider-line" />
                    <span className="divider-text">OR</span>
                    <hr className="divider-line" />
                </div>

                <button className="google-button" onClick={handleGoogleSignIn}>
                    <img src="google-icon.png" alt="Google Icon" className="google-icon" />
                    Continue with Google
                </button>
            </div>
        </div>
    );
}

export default LoginModal;
