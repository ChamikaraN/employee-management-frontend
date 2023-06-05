import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import logEvent from "../utils/logger";
import { ERROR, INFO } from "../constants/sanityConst";
import { editEmployee } from "../services/EmployeeService";
import { Employee } from "../types";

const useEditEmployee = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<Employee, Error, Employee>(editEmployee, {
    onSuccess: async (data) => {
      queryClient.invalidateQueries("fetch-employees");
      await logEvent(INFO, "Employees Edited", {
        additionalData: JSON.stringify(data),
      });
      toast.success("Employee edited successfully 👌");
      navigate("/employee/list");
    },
    onError: async (error: Error, variables, context) => {
      toast.error("Failed to edit employee 😲");
      await logEvent(ERROR, error.message, { additionalData: error.stack });
    },
  });
};

export default useEditEmployee;
