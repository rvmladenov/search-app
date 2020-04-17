import React from 'react';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const ThemeSearch = (props) => {
    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 }
    ];

    return (
        <Autocomplete
          multiple
          id="fixed-tags-demo"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip label={option.title} {...getTagProps({ index })} disabled={index === 0} />
            ))
          }
          renderInput={(params) => (
            <TextField {...params} label="Themes List" variant="outlined" />
          )}
        />
    );
}

export default ThemeSearch;