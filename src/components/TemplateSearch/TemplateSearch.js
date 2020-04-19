import React from 'react';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const ThemeSearch = (props) => {
  const templates = props.templates || [];
  // TODO: temp
//   const templates = [{name: "nx_liability", id: 0}];

  return (
    <Autocomplete
        multiple
        id="theme-search-autocomplete"
        options={templates}
        getOptionLabel={(option) => option.name}
        renderTags={(value, getTagProps) =>
        value.map((option, index) => (
            <Chip label={option.name} {...getTagProps({ index })} />
        ))
        }
        onChange={(event, newValue) => {
            props.onSelect('templates', newValue);
        }}
        renderInput={(params) => (
        <TextField {...params} label="Themes List" variant="outlined" />
        )}
    />
    );
}

export default ThemeSearch;