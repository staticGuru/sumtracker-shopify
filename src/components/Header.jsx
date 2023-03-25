import React from "react";
import PaginateDetails from "./PaginateDetails";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div>
    <SearchBar/>
      <PaginateDetails />
    </div>
  );
}

export default Header;
