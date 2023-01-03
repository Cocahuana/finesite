import React, { useState, useRef } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { Form, FormInput } from "../../../components/index";
import emailjs from "@emailjs/browser";
import FormTextarea from "../../../components/Form/FormTextarea/FormTextarea";
import styled from "styled-components";

const FormBox = styled.div`
	display: flex;
	justify-content: ${(props) => props.justifyContent};
	align-items: center;
	width: 100%;
`;

/*
 * @firstName, @lastName, @message, @email, @companyName son variables usadas en emailJs para el template indicado en emailjsSettings.templateId
 *
 *
 */
function ContactForm(props) {
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState(null);
	const refForm = useRef();
	const emailJsSettings = {
		serviceId: "service_s6fk0l3",
		templateId: "FinesiteTemplate",
		publicKey: "v9enjVVlkY_oP9iFX",
	};

	const initialValues = {
		firstName: "",
		lastName: "",
		message: "",
		email: "",
		companyName: "",
	};
	const sendEmail = (form) => {
		emailjs
			.sendForm(
				emailJsSettings.serviceId,
				emailJsSettings.templateId,
				refForm.current,
				emailJsSettings.publicKey
			)
			.then(
				(result) => {
					console.log("Result: ", result);
					setStatus(true);
					setMessage(
						`Le agradecemos su solicitud  ! Usted será respondido al mail:  o a este numero de teléfono: . Nos contactaremos con usted cuanto antes!`
					);
				},
				(error) => {
					console.log("Error: ", error);
					setStatus(false);
					setMessage(
						`Hubo un problema al enviar la solicitud, por favor vuelvalo a intentar`
					);
				}
			);
	};
	const submit = (form) => {
		sendEmail(form);
	};
	return (
		<Box
			w={props.w}
			h={props.h}
			m={props.m}
			paddingLeft={props.paddingLeft}
		>
			<Form myref={refForm} submit={submit} initialValues={initialValues}>
				<FormBox justifyContent='space-between'>
					<Box w='42.5%'>
						<FormInput label='First' name='firstName' />
					</Box>
					<Box w='42.5%'>
						<FormInput label='Last' name='lastName' />
					</Box>
				</FormBox>
				<FormBox>
					<FormInput label='Email' name='email' />
				</FormBox>

				<FormBox>
					<FormInput label='Company Name' name='companyName' />
				</FormBox>
				{/* <FormTextarea label='Message' name='message' />  commented for now, if someone want it to appear, then uncomment*/}
			</Form>
			{status === true ? (
				<Text fontSize='1rem' color='green'>
					{message}
				</Text>
			) : (
				<Text fontSize='1rem' color='red'>
					{message}
				</Text>
			)}
		</Box>
	);
}

export default ContactForm;
