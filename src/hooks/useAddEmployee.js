import { useMutation, useQueryClient } from "react-query";
import axios from "../utils/axiosInstance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import logEvent from "../utils/logger";
import { ERROR, INFO } from "../constants/sanityConst";

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
    onSuccess: (data) => {
      queryClient.invalidateQueries("fetch-employees");
      toast.success("Employee added successfully 👌");
      logEvent(INFO, "Employees Added", {
        additionalData: JSON.stringify(data),
      });
      navigate("/employee/list");
    },
    onError: (error, variables, context) => {
      toast.error("Failed to add employees 😲");
      logEvent(ERROR, error.message, { additionalData: error.stack });
    },
  });
};

export default useAddEmployee;
