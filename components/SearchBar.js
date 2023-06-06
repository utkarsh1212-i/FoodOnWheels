import { IconButton, InputBase, Paper, useAutocomplete } from "@mui/material";
import { Search } from "@mui/icons-material";
import React from "react";
import usePlacesAutocomplete , {getGeocode , getLatLng} from "use-places-autocomplete";

const SearchBar = (props) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();
  console.log({status , data , value})
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Discover Delicacies..."
        inputProps={{ "aria-label": "search google maps" }}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <Search />          
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
