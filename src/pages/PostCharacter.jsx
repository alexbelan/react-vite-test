import React from 'react';
import { useLocation } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import useFetch from '../hooks/fetch'
import { Card, Image } from '@mantine/core';


const PostCharacter = () => {
     
    let location = useLocation();
    const {
        data,
        isLoading,
        error
    } = useFetch('https://rickandmortyapi.com/api' + location.pathname)

    return (
        <div
            style={{margin: '10px 0'}}
        >
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
                    <Image
                        src={data.image}
                        height={500}
                    />
                </Card.Section>
                <ul>
                    <li>Status: {data.status || '-'}</li>
                    <li>Species: {data.species || '-'}</li>
                    <li>type: {data.type || '-'}</li>
                    <li>Gender: {data.gender || '-'}</li>
                </ul>
            </Card>)}
            
        </div>
    )
}

export default PostCharacter