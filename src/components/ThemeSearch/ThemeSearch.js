import React from 'react';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const ThemeSearch = (props) => {
    return (
        <Autocomplete
          multiple
          id="fixed-tags-demo"
          options={props.templates}
          getOptionLabel={(option) => option.id}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip label={option.name} {...getTagProps({ index })} disabled={index === 0} />
            ))
          }
          onChange={(event, newValue) => {
            props.onSelect(newValue);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Themes List" variant="outlined" />
          )}
        />
    );
}

export default ThemeSearch;