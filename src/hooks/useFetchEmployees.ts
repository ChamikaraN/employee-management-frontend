import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { fetchEmployeesSuccess } from "../redux/Employee/actions";
import { toast } from "react-toastify";
import logEvent from "../utils/logger";
import { ERROR, INFO } from "../constants/sanityConst";
import { fetchEmployees } from "../services/EmployeeService";
import { Employee } from "../types";

const useFetchEmployees = () => {
  const dispatch = useDispatch();
  return useQuery<Employee[], Error>("fetch-employees", fetchEmployees, {
    onSuccess: async (data) => {
      dispatch(fetchEmployeesSuccess(data));
      await logEvent(INFO, "Employees Fetched", {
        additionalData: JSON.stringify(data),
      });
    },
    onError: async (error: Error) => {
      toast.error("Failed to fetch employees 😲");
      await logEvent(ERROR, error.message, { additionalData: error.stack });
    },
    staleTime: 10000, // 10 seconds
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
};

export default useFetchEmployees;
