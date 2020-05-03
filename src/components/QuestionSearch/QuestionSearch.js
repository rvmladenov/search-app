import React from 'react';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

let hasAll = false;
const selectAllId = -1;

const QuestionSearch = (props) => {
  const questions = props.questions.questions || [];
  const selectedQuestions = props.questions.selectedQuestions
  if (questions.length > 0 && !hasAll) {
    questions.unshift({id: selectAllId, name: 'Select All'});
    hasAll = true;
  }

  const onSelect = (newValue) => {
    // If "Select All" was selected - insert all questions 
    if (newValue && newValue.length > 0) {
        const hasSelectAll = newValue.filter(question => {
            return question.id === selectAllId;
        }).length > 0;

        if (hasSelectAll) {
            newValue = [...props.questions];
        }
    }
 
      props.onSelect(newValue);
  }

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
            onSelect(newValue);
        }}
        renderInput={(params) => (
            <TextField {...params} label="Questions List" variant="outlined" />
        )}
    />
    );
}

export default QuestionSearch;