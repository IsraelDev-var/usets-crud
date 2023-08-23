import RenderUsers from "./RenderUsers"

const UsersList = ({users, handleDelete, handleUpdateOpenModal, }) => {


  return (
    <section className="users__list section   ">
    
        {
          users.map((user)=> <RenderUsers
         
            handleUpdateOpenModal={handleUpdateOpenModal} 
            handleDelete={handleDelete}
            user={user}
            key={user.id} />)
        }

    </section>
  )
}
export default UsersList