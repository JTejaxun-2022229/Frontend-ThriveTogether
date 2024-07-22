/* import React, { useState } from 'react';
import { usePost } from '../hooks/usePost.jsx';
import './post.css';

const Post = () => {
  const { createPost } = usePost();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (image) {
      formData.append('photo', image);
    }

    const result = await createPost(formData);
    if (result.success) {
      setMessage('Post creado exitosamente');
    } else {
      setMessage('Error al crear el post');
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <div className='body-container'>
        <div className='title'>
          <h1>POST</h1>
          <hr />
        </div>
        <div className='first-container'>
          <label htmlFor="title">Title</label>
          <input
            className='input'
            placeholder='Please put the title here'
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder='Please put the description here'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <label htmlFor="photo">Image</label>
          <input
            type="file"
            id="photo"
            onChange={handleImageChange}
          />
          <div className='button'>
            <button className="pushable" onClick={handleSubmit}>
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">ADD</span>
            </button>
          </div>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Post; */