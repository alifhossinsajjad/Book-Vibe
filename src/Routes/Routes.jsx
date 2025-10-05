import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import Root from '../pages/Root/Root';
import ErrorPages from '../pages/ErrorPages/ErrorPages';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import BookDetails from '../components/BookDetails/BookDetails';
import ReadList from '../pages/ReadList/ReadList';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPages/>,
        children: [
            {
                index: true,
                path: '/',
                loader : ()=> fetch('data/booksData.json'),
                Component: Home,
            },
           
            {
                path : '/about',
                Component : About
            },
            {
                path : '/readList',
                loader : ()=> fetch('data/booksData.json'),
                Component : ReadList,
            },
            {
                path : '/bookDetails/:id',
                loader : ()=> fetch('data/booksData.json'),
                Component : BookDetails
            }
        ]
    }

])