
import PropTypes from 'prop-types';
const ReadingTime = ({readingTime}) => {
    return (
        <div className='text-[#6047EC] text-2xl font-bold border-[#6047EC] border-2 rounded-lg px-7 py-5 mb-4'>
            <h3>Spent time on read : {readingTime} min</h3>
        </div>
    );
};
ReadingTime.propTypes = {
    readingTime: PropTypes.number
}
export default ReadingTime;