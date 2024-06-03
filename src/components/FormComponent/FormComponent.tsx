import {useForm} from "react-hook-form";
import {IFormData} from "../../models/IFormData";
import authService from "../../services/auth.service";

const FormComponent = () => {
    const {register, handleSubmit}
        = useForm<IFormData>(
            {
                defaultValues: {username: 'userSZ1', password: 'P@$$word1'},
        });

    const auth = async (formData: IFormData) => {
       await authService.login(formData)
    };
    return (
        <div>
            <form onClick={handleSubmit(auth)}>
                <input type="text"{...register('username')}/>
                <input type="text"{...register('password')}/>
                <button>auth me</button>
            </form>
        </div>
    );
};

export {FormComponent};