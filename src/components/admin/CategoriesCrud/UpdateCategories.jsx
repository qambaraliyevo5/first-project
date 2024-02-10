import React, { useState } from 'react';
import { useUpdateCategoryMutation } from '../../redux/slice/CategoriesCrud/crud';

const UpdateCategories = ({ category, stopEditing }) => {
  const [name, setName] = useState(category.name);
  const [image, setImage] = useState(category.image);
  const [updateCategory] = useUpdateCategoryMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateCategory({ id: category.id, name, image });
    stopEditing();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateCategories;




