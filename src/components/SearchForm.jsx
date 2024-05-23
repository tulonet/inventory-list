import React, { useState } from 'react';

const SearchForm = ({ searchTerm, search, handleSearchTermChange }) => {
    
    return (
        <>
            <div class="m-4">
                <form class="max-w-sm mx-auto" onSubmit={search}>
                    <div class="mb-5">
                    <label class="relative block">
                        <span class="sr-only">Etsi</span>
                    </label>
                    <input
                        class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
                        placeholder="Esim. haalari"
                        type="text"
                        id="search"
                        value={searchTerm}
                        onChange={handleSearchTermChange}
                    />
                    </div>
                    <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">Etsi</button>
                </form>
            </div>
        </>
    )

}
export default SearchForm;