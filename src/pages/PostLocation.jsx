import React from 'react';
import { useLocation } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import useFetch from '../hooks/fetch'
import { Card } from '@mantine/core';


const PostLocation = () => {
    let location = useLocation();
    const {
        data,
        isLoading,
        error
    } = useFetch('https://rickandmortyapi.com/api' + location.pathname)

    return (
        <>
            {isLoading && 
                <p>...Loading</p>
            }
            {error && <ErrorPage />}
            {!!data && (<Card>
                <h2>{data.name}</h2>
                <Card.Section>
                    <ul>
                        <li>Type: {data.type || '-'}</li>
                        <li>Dimension: {data.dimension || '-'}</li>
                    </ul>
                </Card.Section>
            </Card>)}
            
        </>
    )
}

export default PostLocation