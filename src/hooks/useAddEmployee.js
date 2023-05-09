import { useMutation, useQueryClient } from "react-query";
import axios from "../utils/axiosInstance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const addEmployee = async (employeeData) => {
  try {
    const response = await axios.post("employee", employeeData);
    return response.data;
  } catch (error) {
    throw new Error("Failed to add employee");
  }
};

const useAddEmployee = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(addEmployee, {
    onSuccess: () => {
      queryClient.invalidateQueries("fetch-employees");
      toast.success("Employee added successfully 👌");
      navigate("/employee/list");
    },
    onError: (error, variables, context) => {
      toast.error("Failed to add employees 😲");
    },
  });
};

export default useAddEmployee;
