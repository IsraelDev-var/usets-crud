import UsersForm from "./components/UsersForm"
import './App.css'
import { useEffect, useState } from "react"
import axios from "axios"
import UsersList from "./components/UsersList"


const base_url = "https://users-crud.academlo.tech/users/"
function App() {
  const [users, setUsers] = useState([])
  const [ismodal, setIsmodal] = useState(false)


  





  const getAlUsers = ()=> {
    axios
      .get(base_url)
      .then(({data}) => setUsers(data))
      .catch((err) => console.log(err))


  }

  const craeteUser = (newUser, formElement) => {
    axios
      .post(base_url, newUser)
      .then(({data}) => {
        console.log(data)
        formElement.reset()
        getAlUsers()
        handleCreateUser()
      } )
      .catch((err) => console.log(err))

  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    const formData = Object.fromEntries(new FormData(e.target))

//crear nuevo usuario

  craeteUser(formData, e.target);


  }


  
  const handleCreateUser = (e)=>{
      if (ismodal) {
        setIsmodal(false)
        
      }else{
        setIsmodal(true)
      }
  }


 useEffect(() => {
  

  axios
    .get(base_url)
    .then(({data}) => setUsers(data))
    .catch((err) => console.log(err))

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
            ismodal ? <UsersForm handleSubmit={handleSubmit} handleCreateUser={handleCreateUser} />: ""
        }
        <UsersList getAlUsers={getAlUsers} base_url={base_url}  users={users} />
        
      </main>
    </>
  )
}

export default App
