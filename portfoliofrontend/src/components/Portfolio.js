import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button, Container, Paper} from "@mui/material";
import {useEffect, useState} from "react";

export default function Portfolio() {
    // Setting Setters & Getters for all data about portfolio projects
    const paperStyle={padding: '50px 20px', with: 600, margin: "20px auto"}
    const[name, setName] = useState('')
    const[members, setMembers] = useState('')
    const[description, setDescription] = useState('')
    const[technologies, setTechnologies] = useState('')
    const[link, setLink] = useState('')
    const[projects, setProjects] = useState([])

    // Handles the operation of adding the projects to a database once the "submit project" button is clicked
    const handleClick=(e)=>{
        e.preventDefault()
        const portfolio = {name, members, description, technologies, link}
        console.log(portfolio)
        fetch("http://localhost:8080/portfolio/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(portfolio)
            }
        ).then(()=>{
            console.log("New Project Added")
        })
    }

    // Gets all the projects from the database
    useEffect(()=>{
        fetch("http://localhost:8080/portfolio/getAll")
            .then(res=>res.json())
            .then((result)=>{
            setProjects(result);
        })
    },[])


    return (
        // Displays the form used to add new projects to the portfolio (Will be commented out by default)
        <Container>
        {/*    <Paper elevation={3} style={paperStyle}>*/}
        {/*        <h1 style={{color:"blue"}}><u>Add Project</u></h1>*/}
        {/*<Box*/}
        {/*    component="form"*/}
        {/*    sx={{*/}
        {/*        '& > :not(style)': { m: 1},*/}
        {/*    }}*/}
        {/*    noValidate*/}
        {/*    autoComplete="off"*/}
        {/*>*/}
        {/*    <TextField id="outlined-basic" label="Project Name" variant="outlined" fullWidth*/}
        {/*               value={name}*/}
        {/*               onChange={(e)=>setName(e.target.value)}*/}
        {/*    />*/}
        {/*    <TextField id="outlined-basic" label="Project Members" variant="outlined" fullWidth*/}
        {/*               value={members}*/}
        {/*               onChange={(e)=>setMembers(e.target.value)}*/}
        {/*    />*/}
        {/*    <TextField id="outlined-basic" label="Project Description" variant="outlined" fullWidth*/}
        {/*               value={description}*/}
        {/*               onChange={(e)=>setDescription(e.target.value)}*/}
        {/*    />*/}
        {/*    <TextField id="outlined-basic" label="Technologies Used" variant="outlined" fullWidth*/}
        {/*               value={technologies}*/}
        {/*               onChange={(e)=>setTechnologies(e.target.value)}*/}
        {/*    />*/}
        {/*    <TextField id="outlined-basic" label="Project Link" variant="outlined" fullWidth*/}
        {/*               value={link}*/}
        {/*               onChange={(e)=>setLink(e.target.value)}*/}
        {/*    />*/}
        {/*    <Button color="secondary" onClick={handleClick}>Submit Project</Button>*/}
        {/*</Box>*/}
        {/*    </Paper>*/}
            <h1 style={{color:"#fff"}}>Projects</h1>
            <Paper elevation={3} style={paperStyle}>
                {projects.map(project=>(
                    <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={project.id}>
                        <strong><a href={project.link}>Github Repository ({project.name})</a></strong><br/>
                        <strong>Project Name:</strong> {project.name}<br/>
                        <strong>Members:</strong> {project.members}<br/>
                        <strong>Description:</strong> {project.description}<br/>
                        <strong>Technologies:</strong> {project.technologies}<br/>
                    </Paper>
                ))}
            </Paper>
        </Container>
        // Code above displays the projects to the user viewing the portfolio
    );
}
