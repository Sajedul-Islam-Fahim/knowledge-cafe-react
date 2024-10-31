import { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmars = [...bookmarks, blog];
    setBookmarks(newBookmars);
  }

  const handleMarkAsRead = (id,time) => {
    const newReadTime = readTime + time;
    setReadTime(newReadTime);

    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks  bookmarks={bookmarks} readTime={readTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
