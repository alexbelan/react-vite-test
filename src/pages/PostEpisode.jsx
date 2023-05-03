import React from 'react';
import { useLocation } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import useFetch from '../hooks/fetch'


const PostEpisode = () => {
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
                    <li>Air date: {data.air_date || '-'}</li>
                    <li>Episode: {data.episode || '-'}</li>
                </ul>
            </>)}
            
        </>
    )
}

export default PostEpisode