import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Uitility/addToDB';
import { Book, Type } from 'lucide-react';
import BookCard from '../BookCard/BookCard';
const ReadList = () => {

    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState('')

    const data = useLoaderData()
    console.log(data);


    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBooks = storedBookData.map((id) => parseInt(id))

        const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId))
        setReadList(myReadList);
    }, [])


    const handleSort = (type)=> {
        setSort(type)

        if(type === 'pages'){
            const sortedByPage = [...readList].sort((a,b)=> a.totalPages - b.totalPages)
            setReadList(sortedByPage)
        }
        if(type === 'reating'){
            const sortByReting = [...readList].sort((a,b)=>a.rating - b.rating)
            setReadList(sortByReting)
        }
    }


    return (
        <Tabs>
            <details className="dropdown flex my-8 justify-center">
                <summary className="btn m-1">Sort By : {sort?sort:""}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={()=> {handleSort('pages')}}>Pages</a></li>
                    <li><a onClick={()=>{handleSort('reating')}}>Reating</a></li>
                </ul>
            </details>
            <TabList>
                <Tab>Read Book List</Tab>
                <Tab>My Wish List</Tab>
            </TabList>

            <TabPanel>
                <h2 className='text-center my-8'>book i read {readList.length}</h2>

                <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 p-10'>
                    {
                        readList.map(b => <BookCard key={b.bookId} book={b} />)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
        </Tabs>
    );
};

export default ReadList;