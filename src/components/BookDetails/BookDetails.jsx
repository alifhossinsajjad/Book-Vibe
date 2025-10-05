import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Uitility/addToDB';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';



const MySwal = withReactContent(Swal)


const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id)
    const data = useLoaderData()
    const book = data.find(book => book.bookId === bookId)
    console.log(id);

    const { bookName, image, author } = book;


    const handleMarkAsRead = id => {


        MySwal.fire({

            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        })

        addToStoredDB(id)

    }

    return (
        <div className='p-10'>
            <div className="card card-side bg-base-100 shadow-sm my-20">
                <figure>
                    <img className='w-80'
                        src={image}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <p>{author}</p>
                    <div className="card-actions justify-end gap-10">
                        <button onClick={() => handleMarkAsRead(id)} className="btn btn-primary">Mark as Read</button>
                        <button className="btn btn-primary">Add to Wish List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;