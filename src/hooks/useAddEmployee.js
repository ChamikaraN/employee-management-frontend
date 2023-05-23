import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import logEvent from "../utils/logger";
import { ERROR, INFO } from "../constants/sanityConst";
import { addEmployee } from "../services/EmployeeService";

const useAddEmployee = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(addEmployee, {
    onSuccess: async (data) => {
      queryClient.invalidateQueries("fetch-employees");
      toast.success("Employee added successfully 👌");
      await logEvent(INFO, "Employees Added", {
        additionalData: JSON.stringify(data),
      });
      navigate("/employee/list");
    },
    onError: async (error, variables, context) => {
      toast.error("Failed to add employees 😲");
      await logEvent(ERROR, error.message, { additionalData: error.stack });
    },
  });
};

export default useAddEmployee;
