import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const TextInput = styled.TextInput`
  background-color: #fff;
  margin: 30px 30px;
  padding: 5px 20px;
  border-radius: 30px;
`;

const Input = ({ placeholder, value, onChange, onSubmit }) => (
  <TextInput
    value={value}
    onChangeText={onChange}
    placeholder={placeholder}
    returnKeyType={"search"}
    onSubmitEditing={onSubmit}
    autoCorrect={false}
  />
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Input;
