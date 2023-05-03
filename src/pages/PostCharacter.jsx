import React from 'react';
import { useLocation } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import useFetch from '../hooks/fetch'


const PostCharacter = () => {
     
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
            {!!data && (<>
                <h2>{data.name}</h2>
                <img src={data.image} />
                <ul>
                    <li>Status: {data.status || '-'}</li>
                    <li>Species: {data.species || '-'}</li>
                    <li>type: {data.type || '-'}</li>
                    <li>Gender: {data.gender || '-'}</li>
                </ul>
            </>)}
            
        </>
    )
}

export default PostCharacter