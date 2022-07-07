import { useForm } from "react-hook-form";
import { useState } from "react";

const FomInscription = () => {
  const { register, handleSubmit, formState : {errors} } = useForm();
  const [user, setUser] = useState()

  function onSubmit(data) {
    console.log(data);
    const value = {firstName: data.firstName, gender: data.gender}
    console.log(value);
    setUser(value)
    console.log(user);
  }

  return (
    <div id="forms">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nom</label>
        <input {...register("firstName", {required : true})} />
        {errors.firstName &&  <p class="error">Le nom est requis !</p>}
        <select {...register("gender", {required : true})}>
          <option value="femme">femme</option>
          <option value="homme">homme</option>
        </select>
        <input type="submit" />
      </form>
      
    </div>
  );
};

export default FomInscription;
