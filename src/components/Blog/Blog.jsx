// import { space } from 'postcss/lib/list';
import PropTypes from 'prop-types';
import { MdOutlineBookmarkAdd } from "react-icons/md";
const Blog = ({blog}) => {
  const {title, cover, reading_time, author, author_img, posted_date, hashtags} = blog;

  // console.log(blog);
  return (

    <div className='mb-20'>
      <img className='mb-4' src={cover} alt={`cover picture of the title ${title}`} />

      <div className='flex justify-between'>
        <div className='flex gap-6 mb-3'>
          <img src={author_img} alt="" />
          <div>
            <h3 className='2xl'>{author}</h3>
            <p>{posted_date}</p>
          </div>

        </div>
        <div>
          <span>{reading_time} min read </span>
          <button className='ml-2  text-2xl'><MdOutlineBookmarkAdd /></button>

        </div>

      </div>

      <h2 className="text-4xl mb-2">{title}</h2>
      <p>
        {
          hashtags.map((hash, idx)=> <span key={idx}> <a href="">#{hash}</a> </span>)
        }
      </p>
    </div>

  );
};

Blog.propTypes = {
  blog:PropTypes.object.isRequired
}
export default Blog;