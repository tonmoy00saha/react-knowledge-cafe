import Bookmark from '../Bookmark/Bookmark'
import PropTypes from 'prop-types'
import ReadingTime from '../reading_time/ReadingTime'

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3">
            <ReadingTime readingTime={readingTime}></ReadingTime>
            <div className='bg-[#1111110C] rounded-lg p-7'>
            <h2 className="text-3xl font-bold">Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,ind) => <Bookmark key={ind} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};
Bookmarks.propTypes= {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;