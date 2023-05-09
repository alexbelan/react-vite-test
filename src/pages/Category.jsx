import React, { useCallback, useRef, useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useFetchData } from '../hooks/fetchData';
import ErrorPage from './ErrorPage';
import { Card } from '@mantine/core';

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
                                <div style={{
                                    margin: '10px 0'
                                }}>
                                    <Card 
                                        shadow="sm"
                                        padding="sm"
                                        radius="md"
                                        withBorder
                                        ref={lastNodeRef}
                                        key={item.id}>
                                        <h2><Link  to={`${location.pathname}/${item.id}`}>{item.name}</Link></h2>
                                    </Card>
                                </div>
                                
                            )
                        }
                        return (
                            <div style={{
                                margin: '10px 0'
                            }}>
                                <Card shadow="sm" padding="sm" radius="md" withBorder key={item.id}>
                                    <h2><Link to={`${location.pathname}/${item.id}`}>{item.name}</Link></h2>
                                </Card>
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