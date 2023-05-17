import { useMutation, useQueryClient } from "react-query";
import axios from "../utils/axiosInstance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import logEvent from "../utils/logger";
import { ERROR, INFO } from "../constants/sanityConst";

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
    onSuccess: (data) => {
      queryClient.invalidateQueries("fetch-employees");
      logEvent(INFO, "Employees Edited", {
        additionalData: JSON.stringify(data),
      });
      toast.success("Employee edited successfully 👌");
      navigate("/employee/list");
    },
    onError: (error, variables, context) => {
      toast.error("Failed to edit employee 😲");
      logEvent(ERROR, error.message, { additionalData: error.stack });
    },
  });
};

export default useEditEmployee;
