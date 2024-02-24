import React, { useState } from 'react';
import { MdOutlineInsertPhoto } from 'react-icons/md';
import { toast } from 'react-toastify';
import { useCreateProductMutation, useGetProductsQuery, useUpdateProductMutation } from '../../redux/slice/product';
import Modal from '../../generic/modal';
import ImageUpload from '../../generic/imgUpload';
import { useGetSubCategoryQuery } from '../../redux/slice/client/subcategory';
import { useGetCategoriesQuery } from '../../redux/slice/CategoriesCrud/crud';
import { useNavigate } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
const UpdateProduct = ({object}) => {
  // state
  const [skip, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(object);
  const navigate =useNavigate()
  // redux
  const [createProduct, { isLoading: isCreating }] = useUpdateProductMutation();
  const { data:subData } = useGetSubCategoryQuery()
  const {data:catigories} =useGetCategoriesQuery()
  // fuction
  const onClose = () => {
    setOpen(false);
  };


  // post data
  const addData = async () => {
    const formData = new FormData();
    
    formData.append('id', inputValue.id);

    formData.append('title', inputValue.title);
    formData.append('image', inputValue.img);
    formData.append('description', inputValue.description);
    formData.append('price', inputValue.price);
    formData.append('amount', inputValue.amount);
    formData.append('amount_measure', inputValue.amount_measure);
    formData.append('category', inputValue?.category);
    if (inputValue.subcategory){
      formData.append('subcategory', inputValue?.subcategory);
    }

    try {
      await createProduct(formData).unwrap();
      toast.success(`Category ${inputValue?.title} added successfully`);
      setInputValue({
        title: '',
        img: '',
      });
      setOpen(false);
    } catch (error) {
      if (error.status==400) {
        toast.error(`Malumot tugri kiritilmagan !!!`)
      }
      else if (error.status==401) {
        toast.error(`Siz foydalanish huquqiga ega emasiz !!!`)

        localStorage.clear()
        navigate('/admin')
      }
     else if (error.status >=500) {
        toast.error('Server tomondan xatolik yokida internet ulangan')
      }
  
    }
  };

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        type="button"
        className="bg-blue-500 inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
          <CiEdit/>
      </button>
      {skip && (
        <Modal loader={isCreating} closeModal={onClose} addFunc={addData}>
          <div className='grid grid-cols-2 gap-3 '>
          
            <div className='flex flex-col gap-2'>
              <div>
                <label htmlFor="Maxsulot Nomi:" className='text-black'>Maxsulot Nomi:</label>
                <input
                 value={inputValue?.title}
                  type="text"
                  id="table-search-users"
                  className="block p-2 pl-10 text-sm text-black border border-gray-300 rounded-lg w-60 bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  onChange={(e) => setInputValue({ ...inputValue, title: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="Maxsulot Name:" className='text-black'>Maxsulot Narxi:</label>
                <input
                  type="number"
                  id="table-search-users"
                 value={inputValue?.price}
                  className="block p-2 pl-10 text-sm text-black border border-gray-300 rounded-lg w-60 bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  onChange={(e) => setInputValue({ ...inputValue, price: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="Maxsulot Name:">Maxsulot Miqdori:</label>
                <input
                 value={inputValue?.amount}

                  type="number"
                  id="table-search-users"
                  className="block p-2 pl-10 text-sm text-black border border-gray-300 rounded-lg w-60 bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  onChange={(e) => setInputValue({ ...inputValue, amount: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="Maxsulot Name:">Maxsulot o'lchov:</label>
                <select
                 value={inputValue?.amount_measure}
                  onChange={(e) => setInputValue({ ...inputValue, amount_measure: e.target.value })}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="Hech Biri">Hech Biri</option>
                   <option value="kg">kg</option>
                   <option value="dona">dona</option>
                   <option value="litr">litr</option>
                   <option value="metr">metr</option>


                </select>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Mahsulox haqida....</label>
                <textarea
                  id="message"
                  rows="4"
                  value={inputValue?.description}
                  onChange={(e) => setInputValue({ ...inputValue, description: e.target.value })}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                ></textarea>
              </div>

            </div>
            <div className='flex flex-col '>
              <div className='flex flex-col'>
                <label htmlFor="">Kategorie Tanlang</label>
                <select

                  onChange={(e) => setInputValue({ ...inputValue, category: e.target.value })}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="Hech Biri">Hech Biri</option>
                  {catigories?.map((value) => {
                    return (
                      <option  value={value?.id}>{value?.title}</option>
                    )
                  })}
                </select>

                <div className='flex flex-col '>
                  <label htmlFor=""> Ichki Kategoriyani Tanlash</label>
                  <select
                    onChange={(e) => setInputValue({ ...inputValue, subcategory: e.target.value })}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="Hech Biri">Hech Biri</option>
                    {subData?.map((value) => {
                      return (
                        <option value={value.id}>{value.title}</option>
                      )
                    })}
                  </select>
                </div>
                <div>
                  <ImageUpload
                    title={'Image'}
                    iconName={<MdOutlineInsertPhoto className="text-5xl" />}
                    iconTitle={'Upload Image'}
                    fileType={'PNG, JPG, JPEG up to 5MB'}
                    LabelFor={'img'}
                    setInputValue={setInputValue}
                    inputValue={inputValue}
                    value={inputValue?.image || object?.image || ''}
                  />
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </Modal>
      )}
    </div>
  );
};

export default UpdateProduct;