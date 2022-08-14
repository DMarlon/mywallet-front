import React from 'react';
import { Form } from 'react-bootstrap';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

const AutoCompleteInput = ({ label, isLoading, labelKey, onChange, onSearch, options, placeholder, renderMenuItemChildren }) => {
    
    return (
        <Form.Group>
            <Form.Label>{label ?? ""}</Form.Label>
            <AsyncTypeahead
                id="my-autocomplet"
                isLoading={isLoading}
                labelKey={labelKey}
                minLength={2}
                onChange={onChange}
                onSearch={onSearch}
                options={options}
                placeholder={placeholder ?? "Search..."}
                renderMenuItemChildren={renderMenuItemChildren}
            />
        </Form.Group>
    )
}

export default AutoCompleteInput;