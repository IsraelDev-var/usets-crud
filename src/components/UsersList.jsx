import RenderUsers from "./RenderUsers"

const UsersList = ({users, handleDelete, handleUpdate,}) => {


  return (
    <section className="users__list section  ">
     
        {
          users.map((user)=> <RenderUsers  handleUpdate={handleUpdate}  handleDelete={handleDelete} user={user} key={user.id} />)
        }

    </section>
  )
}
export default UsersList