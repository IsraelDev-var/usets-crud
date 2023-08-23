
import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { camp_resert } from "../shared/constant";
import { data } from "autoprefixer";
import axios from "axios";

const UsersForm = ({ craeteUser, isUpdate, setIsmodal, setIsUpdate, handlePut }) => {

    const {handleSubmit, register, reset} = useForm()

    const submitdata = (data)=>{

        if (isUpdate) {
            handlePut(data, reset)
            
        }else{
            craeteUser(data, reset)
        }
        
    }




    const handleCloseModal = () => {
        
        setIsmodal(false)
        setIsUpdate(null)
        reset(camp_resert)
    }

    useEffect(() => {
        if(isUpdate){
            reset(isUpdate)
            
        }

    }, [isUpdate])


return (
    <section className="form_section  display-grid p-2 h-[100%] w-[100%]  bg-neutral-950/50">
        <div className="form__users-container   ">
            
        <i   onClick={handleCloseModal} className=' text-2xl bx bx-x text-white' ></i>
            <h2 className="form__title">
                <span>
                    {
                        isUpdate ? "Update User" : "New User"
                    }
                    </span>
            </h2>

            <form onSubmit={handleSubmit(submitdata)}   className="form__data" id="form__data">
            <div  className="form__group ">

                <div   className="form__box">
                <label htmlFor="name" className="form__label">Name</label>
                    <input max={25} type="text" {...register("first_name")} id="name" name="first_name"  required placeholder="First Name" className="form__input outline-none" />
                    
                </div>

                <div className="form__box">
                <label htmlFor="last-name" className="form__label">Last Name</label>
                    <input max={25} type="text" {...register("last_name")} id="last-name" name="last_name" required placeholder="Last Name" className="form__input outline-none "  />
                    
                </div>
                <div className="form__box">
                
                <label htmlFor="email" className="form__label">Email</label>
                    <input type="email" {...register("email")} id="email" name="email" required placeholder="Email" className="form__input outline-none" />
                    
                </div>

                <div className="form__box">
                    <label htmlFor="password" className="form__label">Password</label>
                    <input min={8} max={16} type="password" {...register("password")} id="password" name="password" required placeholder="Password" className="form__input outline-none" />
                    
                </div>

                <div className="form__box">
                    <label htmlFor="date" className="form__label">date</label>
                    <input type="date" {...register("birthday")} id="date" name="birthday" required  className="form__input outline-none" />
                    
                </div>

                <button type="submit" className="form__button  bg-black p-2 my-4 mx-2 rounded-[10px] text-white">
                    <i className='bx bx-send px-2'></i>
                    
                        {
                            isUpdate ? "Save Changes":"New User"
                        }
                    
                </button>

            </div>
            
            </form>
        </div>
    </section>
)
}
export default UsersForm