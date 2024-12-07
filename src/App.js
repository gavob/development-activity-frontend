import './App.css';
import RepoSearcher from './components/RepoSearcher';
import DataVisualiser from './components/DataVisualiser';
import { Container } from 'react-bootstrap';
import { useState } from 'react';

function App() {
    const [analysisIsLoading, setAnalysisIsLoading] = useState(false);
    const [repoName, setRepoName] = useState("");

    return (
        <div className="App pb-4">
            <header className='App-header p-4 mb-4'>
                <h1>Development Activity Visualiser</h1>
            </header>
            <Container>
                <RepoSearcher setAnalysisIsLoading={setAnalysisIsLoading} setRepoName={setRepoName}/>
                <DataVisualiser isLoading={analysisIsLoading} setIsLoading={setAnalysisIsLoading} repoName={repoName}/>
            </Container>
        </div>
    );
}

export default App;
