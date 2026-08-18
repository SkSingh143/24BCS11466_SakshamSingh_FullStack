import { useContext } from "react";
import {StudentContext} from "../Context/StudentContext";

function useUser() {
   const {student}=useContext(StudentContext) 

   return {student};
}
export default useUser;