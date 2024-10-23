import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "./users.api"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { AddUser } from "./addUser"

export const Users = () => {
    const users = useSelector(state => state.accounts)
    const dispatch = useDispatch()
    const status = useSelector(state => state.status)
    const navigate = useNavigate()
    console.log(users)

    useEffect(() => {
        dispatch(getUsers())
    },[])
    return <>
    <h1>Users</h1>
    <h3>{users.length}</h3>
    <p>{status}</p>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
        {      
            users.map(user => {
                return <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.salary}</td>
                </tr>

            })
        }
        </tbody>
    </table>
    <nav>
        <Link to = "/add">Add User</Link>
    </nav>
       
    
    </>



    
}