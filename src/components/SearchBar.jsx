import { useState } from "react";

function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState(["fs", "sdf", "fsdf", "sdf"]);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setSearchText(inputText);
    setShowSuggestions(inputText.length > 0);
   //Here I need to call the api endpoints
  };

  return (
    <div className="relative">
      <div class="relative w-1/4">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="simple-search"
          value={searchText}
          onChange={handleInputChange}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
        />
      </div>

      {showSuggestions && (
        <div className="absolute z-10 mt-1 w-1/4 bg-white rounded-md shadow-lg">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion}
              className="px-4 py-2 text-sm text-gray-900 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                setSearchText(suggestion);
                setShowSuggestions(false);
                // Call your search function with the selected suggestion
              }}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default SearchBar;
