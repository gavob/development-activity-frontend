import React, { useEffect, useState } from 'react'
import { RiseLoader } from 'react-spinners'
import { getRepoActivityAnalysis } from '../api/ApiService';
import BarChart from './BarChart';
import CirclePackingView from './CirclePackingView';
import { Col, Container, Row } from 'react-bootstrap';
import LineChart from './LineChart';
import ScatterChart from './ScatterChart';

export default function DataVisualiser({isLoading, setIsLoading, repoName}) {
    const [activityAnalysis, setActivityAnalysis] = useState({});

    const loadAnalysis = async () => {
        const response = await getRepoActivityAnalysis(repoName);
        console.log(response);
        setActivityAnalysis(response);
        setIsLoading(false);
    }

    useEffect(() => {
        if (isLoading) {
            loadAnalysis();
        }
    }, [isLoading])

    return (
        <>
            <RiseLoader className='mt-5' loading={isLoading} color='white'/>
            { !isLoading && activityAnalysis.repository &&
            <Container className='data-container mt-4 p-2 rounded-3'>
                <Row>
                    <h3>{activityAnalysis.repository.full_name}</h3>
                    <p>{activityAnalysis.repository.description}</p>
                </Row>
                <Row className='mb-2'>
                    <Col className='border border-black mx-4 rounded'>Open Issues: {activityAnalysis.repository.open_issues}</Col>
                    <Col className='border border-black mx-4 rounded'>Watchers: {activityAnalysis.repository.watchers}</Col>
                    <Col className='border border-black mx-4 rounded'>Forks: {activityAnalysis.repository.forks}</Col>
                    <Col className='border border-black mx-4 rounded'><a target='_blank' href={activityAnalysis.repository.html_url}>{activityAnalysis.repository.full_name}</a></Col>
                </Row>
                <Row>
                    <Col>
                    { activityAnalysis.releases && activityAnalysis.releases.length > 0 ?
                        <ScatterChart title={"Releases"} data={activityAnalysis.releases}/> : <></>
                    }
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                        { activityAnalysis.commits && activityAnalysis.commits.length > 0 ?
                            <LineChart title={"Commits"} data={activityAnalysis.commits}/> : <></>
                        }
                        </Row>
                        <Row>
                        { activityAnalysis.comments && activityAnalysis.comments.length > 0 ?
                            <LineChart title={"Comments"} data={activityAnalysis.comments}/> : <></>
                        }
                        </Row>
                    </Col>
                    <Col>
                    { activityAnalysis.active_contributors && activityAnalysis.active_contributors.length > 0 ?
                        <CirclePackingView title={"Active Contributors"} data={activityAnalysis.active_contributors}/> : <></>
                    }
                    </Col>
                </Row>
                <Row>
                    <Col>
                    { activityAnalysis.pull_request_merge_times && activityAnalysis.pull_request_merge_times.length > 0 ?
                        <BarChart title={"Pull Request Merge Times"} data={activityAnalysis.pull_request_merge_times}/> : <></>
                    }
                    </Col>
                    <Col>
                    { activityAnalysis.issue_close_times && activityAnalysis.issue_close_times.length > 0 ?
                        <BarChart title={"Issue Close Times"} data={activityAnalysis.issue_close_times}/> : <></>
                    }
                    </Col>
                </Row>
                <Row>
                    <Col>
                    { activityAnalysis.issue_types && activityAnalysis.issue_types.length > 0 ?
                        <CirclePackingView title={"Issue Types"} data={activityAnalysis.issue_types}/> : <></>
                    }
                    </Col>
                    <Col>
                        <Row>
                        { activityAnalysis.pull_requests && activityAnalysis.pull_requests.length > 0 ?
                            <LineChart title={"Pull Requests"} data={activityAnalysis.pull_requests}/> : <></>
                        }
                        </Row>
                        <Row>
                        { activityAnalysis.issues && activityAnalysis.issues.length > 0 ?
                            <LineChart title={"Issues"} data={activityAnalysis.issues}/> : <></>
                        }
                        </Row>
                    </Col>
                </Row>
            </Container>
            }
        </>
    )
}
