import UsersForm from "./components/UsersForm"
import './App.css'
import { useEffect, useState } from "react"
import axios from "axios"
import UsersList from "./components/UsersList"
import { camp_resert } from "./shared/constant"


const base_url = "https://users-crud.academlo.tech/users/"
function App() {
  const [users, setUsers] = useState([])
  const [isUpdate, setIsUpdate] = useState(null)

  const [ismodal, setIsmodal] = useState(false)




  const handleDelete = (user_id) => {
  
    axios
        .delete(base_url + user_id + "/")
        .then(() => {
            getAlUsers()
            alert("Usuario eliminado ✔")
        } )
        .catch((err) => console.log(err))
  }

  const handlePut = (newData, react)=> {
    axios
        .patch(base_url + `${isUpdate.id}/`, newData )
        .then(() =>{ 
            getAlUsers()
            react(camp_resert)
            setIsmodal(false)
    })
    .catch((err) =>{
        setIsmodal(false)
        console.log(err)
    })
}


const craeteUser = (newUser, reset) => {
  
  axios
    .post(base_url, newUser)
    .then(() => {
      handleUpdateOpenModal()
      getAlUsers()
      reset(camp_resert)
    } )
    .catch((err) => console.log(err))

}




const getAlUsers = ()=> {
  axios
    .get(base_url)
    .then(({data}) => setUsers(data))
    .catch((err) => console.log(err))


}

//  const formData = Object.fromEntries(new FormData(e.target))

// //crear nuevo usuario

 
  
  // const handleCreateUser = ()=>{

  //   ismodal ? setIsmodal(false) : setIsmodal(true)
  // }

  const handleOpenModal = ()=>{
    ismodal ? setIsmodal(false) : setIsmodal(true)
    
  }



  const handleUpdateOpenModal = (user) => {
    setIsmodal(!ismodal)
    setIsUpdate(user)
  }


useEffect(() => {
  
  getAlUsers()

}, [])


  return (
    <>
      <main className="">
        <nav className=' flex mt-[1rem] mb-[2rem] p-2 place-content-between section items-center  '>
          <span className=' text-2xl font-bold' >Users</span>
          <button onClick={handleOpenModal}  id='btn' className='bg-black rounded-[10px] text-white p-2'>
          <i  className=' bx bx-plus ' ></i>Create new user
          </button>
        </nav>
        { 
            ismodal ? <UsersForm handlePut={handlePut}   setIsUpdate={setIsUpdate}  isUpdate={isUpdate} setIsmodal={setIsmodal} craeteUser={craeteUser}    /> :  ""
        }
        <UsersList  handleUpdateOpenModal={handleUpdateOpenModal}  handleDelete={handleDelete}  users={users} />
        
      </main>
    </>
  )
}

export default App
