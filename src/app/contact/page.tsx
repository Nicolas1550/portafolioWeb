"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaUser, FaRegCommentDots } from "react-icons/fa";
import {
  ContactContainer,
  Form,
  FormField,
  Input,
  TextArea,
  SubmitButton,
  ContactTitle,
} from "../components/pageStyles/contactStyles";

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Spinner from "../components/spinner/spinner";

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Aquí asegúrate de que las claves coincidan con los campos de tu plantilla en EmailJS
    const templateParams = {
      from_name: formData.name,
      user_email: formData.email, // Cambiado a 'user_email' para coincidir con la plantilla de EmailJS
      message: formData.message,
    };

    emailjs
      .send(
        "service_mwmmqvd", // Reemplaza con tu ID de servicio EmailJS
        "template_n3xuwgd", // Reemplaza con tu ID de plantilla EmailJS
        templateParams, // Pasamos los parámetros correctamente aquí
        "R93T5B0hw-lOz08xE" // Reemplaza con tu User ID de EmailJS
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          alert("Mensaje enviado con éxito!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setLoading(false);
          alert("Ocurrió un error al enviar el mensaje.");
        }
      );
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar />
      <ContactContainer>
        <ContactTitle>Contacto</ContactTitle>
        <Form onSubmit={handleSubmit}>
          <FormField>
            <FaUser />
            <Input
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <FaEnvelope />
            <Input
              type="email"
              name="email"
              placeholder="Tu correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <FaRegCommentDots />
            <TextArea
              name="message"
              placeholder="Tu mensaje"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormField>
          <SubmitButton type="submit">Enviar</SubmitButton>
        </Form>
      </ContactContainer>
      <Footer />
    </>
  );
};

export default Contact;

