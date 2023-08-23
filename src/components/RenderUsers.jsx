import axios from "axios";

const RenderUsers = ({user, handleDelete, handleUpdateOpenModal, }) => {


  return ( 
    
    <article className="user__container max-h-[300px]   p-2 mx-1  ">
        <div className="user__name-container">
            <h2 className="user__mane">
                <span>
                    {
                        user.first_name
                    }
                    &nbsp;
                    {
                        user.last_name
                    }
                    
                </span>
            </h2>

        </div>
        <hr />
        <div className="user__data">

            <div className="container__email">
                <h3 className="title__email">Email</h3>
                <i className='bx bxl-gmail'></i>
                &nbsp;
                <span>
                    {
                        user.email
                    }
                   
                </span>

            </div>
            <div className="container__date">
                <h3 className="title__birthday">Birthday</h3>
                <i className='bx bx-gift '></i>
                &nbsp;
                <span>
                    {
                        user.birthday
                    }
                
                </span>

            </div>

        </div>
        <hr />
        <div className="user__option">
            <button   onClick={()=> handleDelete(user.id)} className="button  border-2 border-red-500 bg-red-400 button__delite">
            <i className='bx bx-trash text-white' ></i>
            </button>
            <button onClick={()=>handleUpdateOpenModal(user)} className="button border-2 border-neutral-800/60 button__edite">
            <i className='bx text-zinc-600 bx-edit-alt' ></i>
            </button>
        </div>


    </article>
  )
}
export default RenderUsers