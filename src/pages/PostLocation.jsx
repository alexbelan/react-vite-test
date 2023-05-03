import React from 'react';
import { useLocation } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import useFetch from '../hooks/fetch'


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
            {!!data && (<>
                <h2>{data.name}</h2>
                <ul>
                    <li>Type: {data.type || '-'}</li>
                    <li>Dimension: {data.dimension || '-'}</li>
                </ul>
            </>)}
            
        </>
    )
}

export default PostLocation