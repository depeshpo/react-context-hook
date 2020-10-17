import React from 'react';
import ThemeProvider from "./contexts/themeContext";
import HomeComponent from "./components/Home";

function App() {
    return (
        <>
            <ThemeProvider>
                <HomeComponent/>
            </ThemeProvider>
        </>
    );
}

export default App;
