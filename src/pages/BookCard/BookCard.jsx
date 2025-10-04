import { StarHalf } from 'lucide-react';
import React from 'react';
import { Link, NavLink } from 'react-router';

const BookCard = ({ book }) => {

    const {bookId, bookName, author, image } = book
    return (
       <Link to={`/bookDetails/${bookId}`} className="flex mx-auto  card bg-base-100 lg:md:w-96  w-70 shadow-sm">
                <figure>
                    <img className='lg:md:w-50 h-72 w-44 lg:md:p-4 p-8 rounded-lg object-cover '
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Name :{bookName}</h2>
                    <p>Author : {author}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now <StarHalf /></button>
                    </div>
                </div>
            </Link>
    );
};

export default BookCard;