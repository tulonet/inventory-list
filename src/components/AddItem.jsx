import React, { useState } from "react";

const AddItem = ({
  newName,
  handleNameChange,
  newSize,
  handleSizeChange,
  newColor,
  handleColorChange,
  newBrand,
  handleBrandChange,
  newTag,
  handleTagChange,
  addItem,
}) => {
  return (
    <>
      <div class="text-white">
        <form class="max-w-sm mx-auto" onSubmit={addItem}>
          <div class="mb-5">
            <label class="block mb-2 text-sm font-medium">
              Nimi (pakollinen)
            </label>
            <input
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={newName}
              onChange={handleNameChange}
            />
          </div>
          <div class="mb-5">
            <label class="block mb-2 text-sm font-medium">Koko</label>
            <input
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={newSize}
              onChange={handleSizeChange}
            />
          </div>
          <div class="mb-5">
            <label class="block mb-2 text-sm font-medium">Väri</label>
            <input
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={newColor}
              onChange={handleColorChange}
            />
          </div>
          <div class="mb-5">
            <label class="block mb-2 text-sm font-medium">Merkki</label>
            <input
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={newBrand}
              onChange={handleBrandChange}
            />
          </div>
          <div class="mb-5">
            <label class="block mb-2 text-sm font-medium">Tag</label>
            <input
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={newTag}
              onChange={handleTagChange}
            />
          </div>
          <button
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
          >
            Lisää
          </button>
        </form>
      </div>
    </>
  );
};
export default AddItem;
