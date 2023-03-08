import { blogPosts } from "../blogpost";
import Post from "./Post";
const Posts = ()=>{
    return (
        <div className="posts-container">
          {blogPosts.map((post, index) => (
            <Post key={index} index={index} post={post} />
          ))}
        </div>
      );
    };
      
    export default Posts;
