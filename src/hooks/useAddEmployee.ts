import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import logEvent from "../utils/logger";
import { ERROR, INFO } from "../constants/sanityConst";
import { addEmployee } from "../services/EmployeeService";
import { Employee } from "../types";

const useAddEmployee = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<Employee, Error, Employee>(addEmployee, {
    onSuccess: async (data) => {
      queryClient.invalidateQueries("fetch-employees");
      toast.success("Employee added successfully 👌");
      await logEvent(INFO, "Employees Added", {
        additionalData: JSON.stringify(data),
      });
      navigate("/employee/list");
    },
    onError: async (error: Error) => {
      toast.error("Failed to add employees 😲");
      await logEvent(ERROR, error.message, { additionalData: error.stack });
    },
  });
};

export default useAddEmployee;
