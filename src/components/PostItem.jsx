// src/components/PostItem.jsx
import React, { useState } from 'react';
import './PostItem.css'; // Update if you renamed the CSS file as well

const PostItem = ({ username, profilePic, media, description }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => setLikes(likes + 1);

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <img className="profile-pic" src={profilePic} alt="Profile" />
        <span className="username">{username}</span>
      </div>
      <div className="post-media">
        {media.length > 0 && media[0].type === 'image' ? (
          media.slice(0, 3).map((img, index) => (
            <img key={index} src={img.url} alt={`media-${index}`} />
          ))
        ) : media.length > 0 && media[0].type === 'video' ? (
          <video src={media[0].url} controls />
        ) : (
          <div>No media</div>
        )}
      </div>
      <div className="post-description">{description}</div>
      <div className="post-actions">
        <button onClick={handleLike}>Like {likes}</button>
        <div className="comment-section">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment"
          />
          <button onClick={handleAddComment}>Post</button>
        </div>
        <div className="comments">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              {comment}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostItem;
