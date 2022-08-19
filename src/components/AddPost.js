import { Input, TextField } from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPosts } from "../store/postsSlices";
const { v4: uuidv4 } = require('uuid');

const AddPost = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { control, handleSubmit } = useForm({
        defaultValues: {
            title: "",
            body: "",

        }
    });
    const onSubmit = (data) => {
        const id = uuidv4()
        const title = data.title;
        const body = data.body;
        dispatch(addPosts({ id, title, body }))
        navigate("/")

    };

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>

            <Controller
                color="white"
                variant="outline"
                placeholder={"name"}
                name="title"
                control={control}
                render={({ field }) => <Input {...field} />}

            />
            <br />
            <Controller
                style={{ color: "red" }}
                placeholder="jjd"
                name="body"
                control={control}
                render={({ field }) => <Input {...field} />}
            />
            <br />
            < input style={{ padding: 5, margin: 5 }} type="submit" value={'Add Post'} />
        </form>
    );
};

export default AddPost;