import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import FileList from './components/FileList';
import './App.css'; // Import the CSS here

function App() {
    const [refresh, setRefresh] = useState(false);

    const handleUploadComplete = () => {
        setRefresh(prev => !prev);
    };

    return (
        <div style={{ textAlign: 'center', padding: '2rem', color: 'white' }}>
            <h1>Cloud File Storage System</h1>
            <FileUpload onUploadComplete={handleUploadComplete} />
            <FileList key={refresh} />
        </div>
    );
}

export default App;