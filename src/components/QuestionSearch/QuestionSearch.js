import React from 'react';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const QuestionSearch = (props) => {
  const questions = props.questions || [];

    // TODO: temp
  //   const questions = [{name: "multipleListSelection", id: 0}];

  return (
    <Autocomplete
        multiple
        id="questions-search-autocomplete"
        options={questions}
        getOptionLabel={(option) => option.name}
        renderTags={(value, getTagProps) =>
        value.map((option, index) => (
            <Chip label={option.name} {...getTagProps({ index })} />
        ))
        }
        onChange={(event, newValue) => {
            props.onSelect('questions', newValue);
        }}
        renderInput={(params) => (
        <TextField {...params} label="Questions List" variant="outlined" />
        )}
    />
    );
}

export default QuestionSearch;