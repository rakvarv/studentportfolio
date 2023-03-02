import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Container, Paper} from "@mui/material";

// Handles the logic of sending the input provided in form through EmailJS.
export const ContactUs = () => {
    const { REACT_APP_PUBLIC_KEY , REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID } = process.env;
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, form.current, REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                console.log("Message sent...");
            }, (error) => {
                console.log(error.text);
            });
    };

    // handles displaying the contact me form where the user can provide an input
    // and have that mail be sent to my personal email address for any queries.
    return (
        <Container>
            <Paper elevation={3}>
                <h2>Contact Me</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
            </Paper>
        </Container>
    );
};


