import React from 'react';
import { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Home = () =>  {
    const [authorListState, setAuthorListState] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthorListState(res.data.allAuthors))
            .catch(err => console.log(err))
    }, [])

    const clickHandler = e => {
        if(e.target.name === "home-button")    {
            console.log("hunka hunka")
            navigate('/new');
        } else if(e.target.name === "edit-button")    {
            navigate('/edit');
        } else if(e.target.name === "delete-button")    {
            console.log(`Delete button aaaahhhh ${e.target.author_id}`)
        }
    }

    return(
        <div>
            <fieldset>
                <legend>Home.jsx</legend>
                <button onClick = { clickHandler } name = "home-button" className="btn btn-outline-success">Add Author</button>
                {
                    authorListState ?
                    <div>
                        <TableContainer component = { Paper }>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Authors</TableCell>
                                        <TableCell align = "right">Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                    authorListState.map((author, i) => (
                                        <TableRow key = {i}>
                                            <TableCell>{author.name}</TableCell>
                                            <TableCell align = "right">
                                            <button onClick = { clickHandler } author_id = {author.id} name = "edit-button" className="btn btn-outline-warning">Edit</button>
                                            <button onClick = { clickHandler } author_id = {author.id} name = "delete-button" className="btn btn-outline-danger">Delete</button>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div> :
                    <p>Waiting for data!</p>
                }
            </fieldset>
        </div>
    )
}

export default Home;