import { FormControl, Input, InputLabel } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updatePosts } from "../store/postsSlices";


const Update = () => {
    const postId = useParams()
    console.log(postId);
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.postsReducers.posts)



    const { control, handleSubmit } = useForm({
        defaultValues: {
            "title": '',
            "body": '',

        }
    });
    const onSubmit = (data) => {
        const id = postId.id
        const title = data.title;
        const body = data.body;
        // const updateData = { id, title, body }
        dispatch(updatePosts(JSON.stringify({ id, title, body })))


    };



    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <Controller

                variant="outline"
                placeholder={"name"}
                name="title"
                control={control}
                render={({ field }) => <Input {...field} />}

            />
            <br />
            <Controller
                name="body"
                control={control}
                render={({ field }) => <Input {...field} />}
            />
            <br />
            < input type="submit" value={"Update"} />
        </form>
    );
};

export default Update;