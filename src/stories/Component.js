import React from "react";
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography, TextField } from '@mui/material';
import { AiFillYoutube, AiFillLinkedin, AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai'
import './component.css';

export const Input = ({ id, variant, type, label, name, placeholder, onChange }) => {
    return (
        <>
            <TextField
                className="input-text"
                type={type == 'text' ? 'text' : 'number'}
                id={id}
                variant={variant}
                label={label}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
            />
        </>
    )
}

export const CardComponent = ({ alt, image }) => {
    return (
        <Card sx={{ maxWidth: 320}}>
            <CardMedia
                component="img"
                alt={alt}
                image={image}
            />
            <CardContent>
                <Typography gutterBottom textAlign={'center'} variant="h5" component="div">
                    Animal Facts
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Easily recognized by its coat of reddish-orange with dark stripes, the tiger is the largest wild cat in the world.
                </Typography>
            </CardContent>
        </Card>
    )
}

export const Footer = ({ backgroundColor,color,...props }) => {

    return (
        <footer 
        style={backgroundColor && { backgroundColor }}
        {...props}
        >
            <div className="footer-content">
                <p>This is a website designed by Jun Hui using React Storybook. It is a development environment tool that is used as a playground for UI components.
                 It allows us, the developers, to create and test components in isolation. 
                </p>
                <ul className="socials">
                    <li><a href="#"><AiFillLinkedin /></a></li>
                    <li><a href="#"><AiFillFacebook /></a></li>
                    <li><a href="#"><AiFillYoutube /></a></li>
                    <li><a href="#"><AiFillTwitterSquare /></a></li>
                    <li><a href="#"><AiFillInstagram /></a></li>
                </ul>
                <div className="footer-bottom">
                    <p>Copyright &copy;2022 JH. Designed by <span>Jun Hui</span></p>
                </div>
            </div>
        </footer>
    )
}

Input.propTypes = {
    type: PropTypes.oneOf(['string', 'number']),
    id: PropTypes.string,
    variant: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func
}

Input.defaultProps = {
    type: 'text',
    id: 'outlined-basic',
    variant: 'outlined',
    name: 'Enter a value',
    label: 'Enter label',
    placeholder: 'Enter a value',
    onChange: undefined
}

CardComponent.propTypes = {
    alt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

CardComponent.defaultProps = {
    alt: "This is an image",
    image: "empty image",
}

Footer.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
}

Footer.defaultProps = {
    backgroundColor: null,
}
