import RenderUsers from "./RenderUsers"

const UsersList = ({users, base_url, getAlUsers }) => {


  return (
    <section className="users__list section  ">
     
        {
          users.map((user)=> <RenderUsers getAlUsers={getAlUsers} base_url={base_url} user={user} key={user.id} />)
        }

    </section>
  )
}
export default UsersList