import { useMutation, useQueryClient } from "react-query";
import axios from "../utils/axiosInstance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const editEmployee = async (employeeData) => {
  try {
    const response = await axios.put(
      `employee/${employeeData.id}`,
      employeeData
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to edit employee");
  }
};

const useEditEmployee = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(editEmployee, {
    onSuccess: () => {
      queryClient.invalidateQueries("fetch-employees");
      toast.success("Employee edited successfully 👌");
      navigate("/employee/list");
    },
    onError: (error, variables, context) => {
      toast.error("Failed to edit employee 😲");
    },
  });
};

export default useEditEmployee;
