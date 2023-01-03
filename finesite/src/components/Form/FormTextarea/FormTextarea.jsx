import { useContext } from "react";
import { FormContext } from "../Form";
import { Box, InputGroup, Input, Heading, Textarea } from "@chakra-ui/react";
import { customTheme } from "../../../assets/customTheme";
function FormTextarea(props) {
	const { label, type = "text", name } = props;

	const formContext = useContext(FormContext);
	const theme = customTheme;
	const { form, handleFormChange } = formContext;
	return (
		<InputGroup my='2rem' w='100%'>
			<Textarea
				type={type}
				name={name}
				value={form[name]}
				onChange={handleFormChange}
				placeholder={label}
				h='4rem'
				variant='flushed'
				color={theme.text.accent}
				fontSize='2.25rem'
				_placeholder={{ color: theme.text.alphaComplementary2 }}
			/>
		</InputGroup>
	);
}

export default FormTextarea;
