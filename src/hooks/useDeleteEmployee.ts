import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import logEvent from "../utils/logger";
import { ERROR } from "../constants/sanityConst";
import { deleteEmployee } from "../services/EmployeeService";

const useDeleteEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>((id) => deleteEmployee(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("fetch-employees");
      toast.success("Employee deleted successfully 👌");
    },
    onError: async (error, variables, context) => {
      toast.error("Failed to delete employee 😲");
      await logEvent(ERROR, error.message, { additionalData: error.stack });
    },
  });
};

export default useDeleteEmployee;
