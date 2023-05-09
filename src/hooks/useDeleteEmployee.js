import { useMutation, useQueryClient } from "react-query";
import axios from "../utils/axiosInstance";
import { toast } from "react-toastify";

const useDeleteEmployee = () => {
  const queryClient = useQueryClient();

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`employee/${id}`);
    } catch (error) {
      throw new Error(`Failed to delete employee with id ${id}`);
    }
  };

  return useMutation((id) => deleteEmployee(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("fetch-employees");
      toast.success("Employee deleted successfully 👌");
    },
    onError: (error, variables, context) => {
      toast.error("Failed to delete employee 😲");
    },
  });
};

export default useDeleteEmployee;
