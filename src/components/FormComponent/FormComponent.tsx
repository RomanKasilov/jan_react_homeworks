import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {ISavePostModel} from "../../models/savePostModel";
import {postService} from "../../services/json.api.service";
import {savePostValidator} from "../../validators/savePost.validator";


const FormComponent = () => {
    let {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm<ISavePostModel>(
        {mode: "onSubmit", resolver: joiResolver(savePostValidator)})

    const savePost = (data: ISavePostModel) => {
        postService.savePost(data)
            .then(value => console.log(value.data))
    };
    return (
        <>
            <form onSubmit={handleSubmit(savePost)}>
                <input type="number" placeholder={"userId"} {...register('userId')}/>
                {errors.userId && <span>{errors.userId.message}</span>}

                <input type="text" placeholder={"title"}{...register('title')}/>
                {errors.title && <span>{errors.title.message}</span>}

                <input type="text" placeholder={"body"}{...register('body')}/>
                {errors.body && <span>{errors.body.message}</span>}

                <button disabled={!isValid}>save Post</button>

            </form>
        </>
    );
};

export {FormComponent};