import React, { useState, useEffect } from 'react';
                function App() {
                    const [time, setTime] = useState(new Date().toLocaleTimeString());
                    useEffect(() => {
                        const timer = setInterval(() => {
                            setTime(new Date().toLocaleTimeString());
                        }, 1000);
                        return () => clearInterval(timer);
                    }, []);
                    return (
                        <div className="container">
                            <h1>GitLab Automation Test</h1>
                            <p>The current time is: <strong>{time}</strong></p>
                            <p>Status: <span className="status-ok">Integrity Verified</span></p>
                        </div>
                    );
                }

                export default App;