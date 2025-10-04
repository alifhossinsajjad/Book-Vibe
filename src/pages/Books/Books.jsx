import React, { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard';
import { useLoaderData } from 'react-router';

const Books = ({data}) => {
  
    const [allBooks, setAllBooks] = useState([]);

    // useEffect (() => {
    //     fetch ('data/booksData.json').then(res => res.json()).then(data => {
    //         setAllBooks(data)
    //     })
    // } , []);

    return (
        <div>
            <h1 className='text-center text-xl font-bold my-5'>My {allBooks.length} Books</h1>

            <div className=' grid xl:grid-cols-3 lg:md:grid-cols-2 grid-cols-1 gap-10 my-10'>
                {
                    data.map((book)=> <BookCard key={book.Id} book={book}/>)
                }
            </div>
        </div>
    );
};

export default Books;