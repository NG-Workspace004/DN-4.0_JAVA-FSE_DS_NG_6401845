import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  // Fetch posts from API
  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        const postsList = data.map(
          p => new Post(p.id, p.title, p.body)
        );
        this.setState({ posts: postsList });
      })
      .catch(error => {
        console.error("Error fetching posts:", error);
      });
  }

  // Runs once after the component mounts
  componentDidMount() {
    this.loadPosts();
  }

  // Error handling lifecycle method
  componentDidCatch(error, info) {
    alert("An error occurred in Posts component: " + error);
    console.error("Error details:", info);
  }

  // Display posts
  render() {
    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.map(post => (
          <div key={post.id} style={{ marginBottom: "20px" }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
