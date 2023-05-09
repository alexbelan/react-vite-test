import React from 'react';
import { useLocation } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import useFetch from '../hooks/fetch'
import { Card } from '@mantine/core';


const PostEpisode = () => {
    let location = useLocation();
    const {
        data,
        isLoading,
        error
    } = useFetch('https://rickandmortyapi.com/api' + location.pathname)

    return (
        <div>
            {isLoading && 
                <p>...Loading</p>
            }
            {error && <ErrorPage />}
            {!!data && (
                <Card
                    shadow="sm"
                    padding="sm"
                    radius="md"
                    withBorder
                >
                    
                        <h2>{data.name}</h2>
                        <Card.Section>
                            <ul>
                                <li>Air date: {data.air_date || '-'}</li>
                                <li>Episode: {data.episode || '-'}</li>
                            </ul>
                        </Card.Section>
                </Card>)}
            
        </div>
    )
}

export default PostEpisode