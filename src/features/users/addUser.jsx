import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { addUser } from "./users.api"
import { useDispatch } from "react-redux"


export const AddUser = () => {
    const {register, handleSubmit, formState:{errors}, reset} = useForm()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const loginUser = (data) => {
        dispatch(addUser({ name: data.name, salary: data.salary }))
        .unwrap()
        .then(() => {
            reset()
            navigate('/')
        })
        .catch(error => {
            console.error("Error adding user:", error)
        })
    };

    return<>
    <h1>Add User</h1>
    <form onSubmit={handleSubmit(loginUser)}>
        <input 
        
        placeholder="Name"
        type="text"
        {...register("name", {required:"Please fill your name"})}

        />
         {errors.name && <p style={{color:"red"}}>{errors.name.message}</p>}

        
        <input
        placeholder="Salary"
        type="number"
        {...register("salary", {required:"Please fill your salary", pattern:/^[1-9]\d*$/})}
        />
         {errors.salary && <p style={{color:"red"}}>{errors.salary.message}</p>}
        
        
        <button type="submit">Add</button>
    </form>
    </>
}