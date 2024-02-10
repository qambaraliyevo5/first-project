import React from 'react';
import { useDeleteCategoryMutation } from '../../redux/slice/CategoriesCrud/crud';

const DeleteCategories = ({ categoryId }) => {
  const [deleteCategory] = useDeleteCategoryMutation();

  const handleDelete = async () => {
    await deleteCategory(categoryId);
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteCategories;



  