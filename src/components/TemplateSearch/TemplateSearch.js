import React from 'react';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './TemplateSearch.scss';

const ThemeSearch = (props) => {
  const templates = props.templates.templates || [];

  return (
    <Autocomplete
        multiple
        id="theme-search-autocomplete"
        options={templates}
        getOptionLabel={(option) => option.name}
        renderTags={(value, getTagProps) =>
        value.map((option, index) => {
          const filteredTemplatesIds = props.templates.templates.map(template => template.id);

            const isTemplateInTheList = filteredTemplatesIds.indexOf(option.id) >= 0;
            const missingTemplate = !isTemplateInTheList ? 'not-included-template' : 'included-template';

            return <span key={option.id} className={missingTemplate}>
              <Chip label={option.name} {...getTagProps({ index })} />
            </span>;
        })
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