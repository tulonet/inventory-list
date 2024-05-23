import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import ShowItem from "./components/ShowItem";
import AddItem from "./components/AddItem";
import itemService from "./services/items";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [newName, setNewName] = useState("");
  const [newSize, setNewSize] = useState("");
  const [newColor, setNewColor] = useState("");
  const [newBrand, setNewBrand] = useState("");
  const [newTag, setNewTag] = useState("");

  useEffect(() => {
    itemService.getAll().then((initialItems) => {
      setItems(initialItems);
    });
  }, []);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const search = (event) => {
    event.preventDefault();
    const results = items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.size.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.color.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    setSearchTerm("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleSizeChange = (event) => {
    setNewSize(event.target.value);
  };

  const handleColorChange = (event) => {
    setNewColor(event.target.value);
  };

  const handleBrandChange = (event) => {
    setNewBrand(event.target.value);
  };

  const handleTagChange = (event) => {
    setNewTag(event.target.value);
  };

  const addItem = (event) => {
    event.preventDefault();
    const itemObject = {
      name: newName,
      size: newSize,
      color: newColor,
      brand: newBrand,
      tag: newTag,
    };

    itemService.create(itemObject).then((returnedItem) => {
      setItems(items.concat(returnedItem));
      setNewName("");
      setNewSize("");
      setNewColor("");
      setNewBrand("");
      setNewTag("");
    });
  };

  return (
    <div class="bg-black">
      <div class="text-white text-center sm:text-left p-14 mb-14">
        <h1 class="font-serif text-3xl">Kodin inventaariolista</h1>
      </div>
      <div class="container-md border-style: solid border-color: rgb(255 255 255) p-8 shadow-lg m-8 rounded-md">
        <div class="text-center text-white p-4">
          <h2 class="font-serif text-xl">
            Tallennettu {items.length} tavaraa tai vaatetta.
          </h2>
        </div>
        <div id="container" class="text-white text-center p-4">
          <h2 class="font-serif text-xl">
            Hae varastossa olevaa vaatetta tai tavaraa
          </h2>
        </div>
        <SearchForm
          searchTerm={searchTerm}
          handleSearchTermChange={handleSearchTermChange}
          search={search}
        />
        <div class="text-center text-white p-4">
          <ul>
            {searchResults.map((item) => (
              <ShowItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
      <div class="container-md border-style: solid border-color: rgb(255 255 255) p-8 shadow-lg m-8 rounded-md">
        <div class="text-center text-white p-4">
          <h2 class="font-serif text-xl">
            Lisää uusi vaate tai tavara varastoon
          </h2>
        </div>
        <div>
          <AddItem
            newName={newName}
            handleNameChange={handleNameChange}
            newSize={newSize}
            handleSizeChange={handleSizeChange}
            newColor={newColor}
            handleColorChange={handleColorChange}
            newBrand={newBrand}
            handleBrandChange={handleBrandChange}
            newTag={newTag}
            handleTagChange={handleTagChange}
            addItem={addItem}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
