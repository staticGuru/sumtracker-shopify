import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getContactsList } from "../api";
import { ContactState } from "../context/ContactProvider";
import { useDebounce } from "../hooks/useDebounce";

function SearchBar() {
  const { setContact, setPage, contact } = ContactState();
  const [searchText, setSearchText] = useState("");
  const debouncedSearch = useDebounce(searchText, 500);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const { data: suggestions, isLoading } = useQuery({
    queryKey: ["contacts", debouncedSearch],
    queryFn: async () => await getContactsList(debouncedSearch),
    enabled: debouncedSearch !== "",
  });
  useEffect(() => {
    if (!contact) setSearchText("");
  }, [contact]);
  const handleInputChange = async (e) => {
    const inputText = e.target.value;
    setSearchText(inputText);
    setShowSuggestions(inputText.length > 0);
  };
  const selectContact = (suggestion) => {
    setSearchText(suggestion.company_name);
    setShowSuggestions(false);
    setContact(suggestion.id);
    setPage(1);
    let searchParams = new URLSearchParams(window.location.search);
    searchParams.set("contact", suggestion.id);
    if (window.history.replaceState) {
      const url =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        "?" +
        searchParams.toString();
      window.history.replaceState(
        {
          path: url,
        },
        "",
        url
      );
    }
  };
  return (
    <div className="relative mb-3">
      <div class="relative w-1/4">
        <input
          type="text"
          id="Search"
          value={searchText}
          onChange={handleInputChange}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5  dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search by Name/SKU"
        />
        <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
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
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>

      {showSuggestions && (
        <div className="absolute z-10 mt-1 w-1/4 bg-white rounded-md shadow-lg max-h-[15rem] overflow-scroll">
          {isLoading
            ? "Loading..."
            : suggestions.results.map((suggestion, index) => (
                <div
                  key={index}
                  className="px-4 py-2 text-sm text-gray-900 cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    selectContact(suggestion);
                  }}
                >
                  {suggestion.company_name}
                </div>
              ))}
        </div>
      )}
    </div>
  );
}
export default SearchBar;
