import React from 'react';

function Post(props) {
  return (
     <div>
       <h2>{props.post.title}</h2>
       <h2>{props.post.author}</h2>
        <p>{props.post.date}</p>
        <p>{props.post.body}</p>
     </div> 
  );
}

export default Post;