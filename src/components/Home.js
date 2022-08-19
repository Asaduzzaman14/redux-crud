import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DeleteIcon from '@mui/icons-material/Delete';
import { Edit } from '@mui/icons-material';
import { deletePosts, fetchPosts, updatePosts } from '../store/postsSlices';
import { Link } from 'react-router-dom';
import AddPost from './AddPost';



const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    const posts = useSelector((state) => state.postsReducers.posts)

    const handelDelete = (id) => {
        dispatch(deletePosts(id))
    }


    return (
        <div className="home" >
            <AddPost></AddPost>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 550 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>No.</TableCell>
                            <TableCell align="center">TITle</TableCell>
                            <TableCell align="center">Body</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {posts.map((post, index) => (
                            <TableRow
                                key={post.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{index + 1}</TableCell>
                                <TableCell component="th" scope="row">{post.title}</TableCell>
                                <TableCell align="">{post.body}</TableCell>
                                <TableCell align="right">
                                    <Grid item xs={8}>
                                        <DeleteIcon onClick={() => handelDelete(post.id)} />
                                        <Link to={`/updatePost/${post.id}`}>
                                            <Edit>
                                            </Edit>
                                        </Link>
                                    </Grid>

                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
};

export default Home;