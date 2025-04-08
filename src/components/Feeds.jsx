// src/components/Feeds.jsx
import React from 'react';
import PostItem from './PostItem'; // Correct path to PostItem component

const Feed = () => {
  const posts = [
    {
      username: 'JohnDoe',
      profilePic: 'https://via.placeholder.com/40',
      media: [
        { type: 'image', url: 'https://via.placeholder.com/300' },
        { type: 'image', url: 'https://via.placeholder.com/300' },
        { type: 'image', url: 'https://via.placeholder.com/300' },
      ],
      description: 'This is a sample post.',
    },
    {
      username: 'JaneSmith',
      profilePic: 'https://via.placeholder.com/40',
      media: [{ type: 'video', url: 'https://www.w3schools.com/html/movie.mp4' }],
      description: 'Here is another post!',
    },
  ];

  return (
    <div className="feed">
      {posts.map((post, index) => (
        <PostItem
          key={index}
          username={post.username}
          profilePic={post.profilePic}
          media={post.media}
          description={post.description}
        />
      ))}
    </div>
  );
};

export default Feed;
