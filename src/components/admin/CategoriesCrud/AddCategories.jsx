import React, { useState } from 'react';
import { useCreateCategoryMutation } from '../../redux/slice/CategoriesCrud/crud';

const AddCategories = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [createCategory] = useCreateCategoryMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCategory({ name, image });
    setName('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />
      <button type="submit">Add Category</button>
    </form>
  );
};

export default AddCategories;





