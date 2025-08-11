import React from 'react';

const blogs = [
  { id: 1, title: 'React Learning', author: 'Stephen Biz', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', author: 'Schwezdenier', content: 'You can install React from npm.' }
];

function BlogDetails() {
  let content;
  
  // Conditional rendering using if-else
  if (blogs.length > 0) {
    content = blogs.map(blog => (
      <div key={blog.id}>
        <h2>{blog.title}</h2>
        <h4>{blog.author}</h4>
        <p>{blog.content}</p>
      </div>
    ));
  } else {
    content = <p>No blogs available</p>;
  }

  return (
    <div style={{ paddingLeft: '40px' }}>
      <h1>Blog Details</h1>
      {content}
    </div>
  );
}

export default BlogDetails;
