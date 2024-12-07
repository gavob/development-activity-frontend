import React, { useEffect, useState } from 'react'
import useDebouncedValue from '../hooks/useDebouncedValue';
import { Button, Form, ListGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { searchGitHubRepos } from '../api/ApiService';
import { ClipLoader } from 'react-spinners';

export default function RepoSearcher({setAnalysisIsLoading, setRepoName}) {
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearchTerm = useDebouncedValue(searchTerm, 500);
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const RepoTitle = ({ id, body, children, link }) => (
        <OverlayTrigger placement='bottom' overlay={<Tooltip id={id}>{body}</Tooltip>}>
            <a href={link} target='_blank' className="float-start">{children}</a>
        </OverlayTrigger>
    );

    const handleSearch = (event) => {
        event.preventDefault();
        setSearchTerm(event.target.value);
    }

    const handleViewRepoActivity = (repoName) => {
        setSearchResults([]);
        setSearchTerm("");
        setAnalysisIsLoading(true);
        setRepoName(repoName);
    }

    const searchRepos = async () => {
        setIsSearching(true);
        const response = await searchGitHubRepos(debouncedSearchTerm);
        setSearchResults(response);
        setIsSearching(false);
    }

    useEffect(() => {
        if (debouncedSearchTerm) {
            searchRepos();
        }
    }, [debouncedSearchTerm])

    return (
        <>
            <Form.Control className='mx-auto' type="text" 
                placeholder="Enter GitHub repository name..." 
                onChange={handleSearch} 
                value={searchTerm}
                style={{maxWidth:"500px"}}/>
            <ClipLoader loading={isSearching} color='white'/>
            
            <ListGroup className='mx-auto' style={{maxWidth:"490px"}}>
                { !isSearching && searchResults.map((repo) => (
                    <ListGroup.Item key={repo.id} as="li">
                        <RepoTitle id={"tooltip-" + repo.id} body={repo.description} link={repo.html_url}>{repo.full_name}</RepoTitle>
                        <Button className='float-end' size='sm' variant='outline-warning' onClick={() => handleViewRepoActivity(repo.full_name)}>View Activity</Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            
        </>
        
    )
}
