import { FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';
const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id,title, cover_img, reading_time, author, author_img, posted_date, hashtags} = blog;
    console.log(cover_img);
    
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover_img} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-2xl text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((tag,index) => <span key={index}><a href=''>{tag}</a></span> )
                }
            </p>
            <button className='text-purple-600 font-bold-underline' onClick={() => handleMarkAsRead(id,reading_time)}>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func

}

export default Blog;