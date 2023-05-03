import React, { useCallback, useRef, useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useFetchData } from '../hooks/fetchData';
import ErrorPage from './ErrorPage';

const Category = () => {
    let location = useLocation();
    const [pageNumber, setPageNumber] = useState(1)
    const {data, isLoading, error, hasMore } = useFetchData(location.pathname, pageNumber)
    const observer = useRef()

    const lastNodeRef = useCallback((node) => {
        if(isLoading) return
        if(observer.current && !!observer.current.disconnect) {
            observer.current.disconnect()
        }

        observer.current = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting && hasMore) {
                setPageNumber(prev => prev + 1)
            }
        })
        if(node) {
             observer.current.observe(node)
        }
    }, [isLoading, hasMore])

    useEffect(() => {
        setPageNumber(1)
    }, [location.pathname])

    return (
        <>
            {error && (
                <ErrorPage />
            )}
            {!error && data && (
                <>
                    {data.map((item, index) => {
                        if(data.length === index + 1) {
                            return (
                                <div ref={lastNodeRef} key={item.id}>
                                    <h2><Link  to={`${location.pathname}/${item.id}`}>{item.name}</Link></h2>
                                </div>
                            )
                        }
                        return (
                            <div key={item.id}>
                                <h2><Link  to={`${location.pathname}/${item.id}`}>{item.name}</Link></h2>
                            </div>
                        )
                    })}
                </>
                )
            }
            {isLoading && (
                <h3>...Loading</h3>
            )}
        </>
    )
}

export default Category