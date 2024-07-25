import { Link } from "react-router-dom";
import databaseService from "../appwriteServices/Database.js";

// id is written as $id in the database of appwrite
import PropTypes from "prop-types";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className=" w-full bg-gray-100 rounded-xl p-4">
        <div className=" w-full justify-center mb-4">
          <img
            src={databaseService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl w-full h-60 object-cover"
          />
        </div>
        <div className="w-full">
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
      </div>
    </Link>
  );
}
PostCard.propTypes = {
  $id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  featuredImage: PropTypes.string.isRequired,
};

export default PostCard;
