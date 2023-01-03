import React, { useState } from "react";
import Button from "../ui/Button/Button";
import styled from "styled-components";
import { Box, Spacer } from "@chakra-ui/react";
const FormStyle = styled.form`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const Center = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const FormContext = React.createContext({
	form: {},
});

function Form(props) {
	const { children, submit = () => {}, initialValues, ref } = props;

	const [form, setForm] = useState(initialValues);

	const handleFormChange = (event) => {
		// Get the name of the field that caused this change event
		// Get the new value of this field
		const { name, value } = event.target;

		// Update state
		// Assign new value to the appropriate form field
		setForm({
			...form,
			[name]: value,
		});
	};

	return (
		<FormStyle ref={props.myref} className='Form'>
			<FormContext.Provider
				value={{
					form,
					handleFormChange,
				}}
			>
				<Box>{children}</Box>
			</FormContext.Provider>
			<Center>
				<Button onClick={() => submit(form)}>Submit Form</Button>
			</Center>
		</FormStyle>
	);
}

export default Form;
