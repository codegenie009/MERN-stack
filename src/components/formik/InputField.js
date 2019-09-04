import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'components/form';
import Field from './Field';

const InputField = ({
  field,
  form,
  label,
  helpText,
  labelProps,
  ...otherProps
}) => {
  return (
    <Field
      form={form}
      name={field.name}
      label={label}
      helpText={helpText}
      labelProps={labelProps}
      render={({ hasError }) => (
        <Input isInvalid={hasError} {...field} {...otherProps} />
      )}
    />
  );
};

InputField.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,
  label: PropTypes.string,
  helpText: PropTypes.string,
  labelProps: PropTypes.object,
  submitCount: PropTypes.number
};

export default InputField;
