import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({blog,handleAddToBookmark,handleReadingTime}) => {
    const {id, title, cover, author, author_img, reading_time, post_date, hashtags}= blog;
    // console.log(blog);
    return (
        <div className='mb-20'>
            <img className='w-full' src={cover} alt=""/>
            <div className='flex justify-between items-center m-5'>
            <div className='flex flex-row gap-4 items-center'>
                <img className='rounded-full w-14' src={author_img} alt="" />
                <div>
                    <h3 className='text-2xl font-bold'>{author}</h3>
                    <p className='text-[#11111199] font-semibold'>{post_date}</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
            <span className='text-[#11111199] font-medium'>{reading_time} min read</span>
            <button onClick={()=>handleAddToBookmark(blog)}
            className='text-[#11111199] '><IoBookmarksOutline></IoBookmarksOutline></button>
            </div>
            </div>
            <h3 className='text-4xl font-bold'>{title}</h3>
            <div className='my-5'>
                {
                    hashtags.map((hash,ind)=> <span className='mr-4 text-[#11111199] text-xl font-medium' key={ind}><a href="">{hash}</a></span>)
                }
            </div>
            <button onClick={()=>handleReadingTime(id,reading_time)} className='text-[#6047EC] underline text-xl font-semibold'>Mark as read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func
}
export default Blog;