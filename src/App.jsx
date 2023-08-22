import UsersForm from "./components/UsersForm"
import './App.css'
import { useEffect, useState } from "react"
import axios from "axios"
import UsersList from "./components/UsersList"


const base_url = "https://users-crud.academlo.tech/users/"
function App() {
  const [users, setUsers] = useState([])
  const [ismodal, setIsmodal] = useState(false)


// const handleUpdate = (dataUser)=> {
//   console.log(dataUser);
// }

  const handleDelete = (user_id) => {
  
    axios
        .delete(base_url + user_id + "/")
        .then(() => {
            getAlUsers()
            alert("Usuario eliminado")
        } )
        .catch((err) => console.log(err))
  }



  const getAlUsers = ()=> {
    axios
      .get(base_url)
      .then(({data}) => setUsers(data))
      .catch((err) => console.log(err))


  }

const craeteUser = (newUser) => {
  
  axios
    .post(base_url, newUser)
    .then(() => {
        
      getAlUsers()
      handleCreateUser()
    } )
    .catch((err) => console.log(err))

}

//  const formData = Object.fromEntries(new FormData(e.target))

// //crear nuevo usuario

 
  
  const handleCreateUser = ()=>{

    ismodal ? setIsmodal(false):setIsmodal(true)
  }


 useEffect(() => {
  

  getAlUsers()

 }, [])
 

  return (
    <>
      <main className="">
        <nav className=' flex mt-[1rem] mb-[2rem] p-2 place-content-between section items-center  '>
          <span className=' text-2xl font-bold' >Usuars</span>
          <button onClick={handleCreateUser} id='btn' className='bg-black rounded-[10px] text-white p-2'>
          <i  className='bx bx-plus ' ></i>Create new user
          </button>
        </nav>
        { 
            ismodal ? <UsersForm  craeteUser={craeteUser}  handleCreateUser={handleCreateUser} />: ""
        }
        <UsersList    handleDelete={handleDelete}  users={users} />
        
      </main>
    </>
  )
}

export default App
