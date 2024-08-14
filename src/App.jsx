
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }
  const [readingTime,setReadingTime]= useState(0);
  const handleReadingTime=(id, time)=>{
    const newreadingTime = readingTime+time;
    setReadingTime(newreadingTime);
    // remove the read blog from bookmark
    const remainingBookmarks = bookmarks.filter(bookmark=>bookmark.id!==id);
    setBookmarks(remainingBookmarks);

  }
  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <Header></Header>
        <div className='md:flex md:gap-6 mt-6'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
