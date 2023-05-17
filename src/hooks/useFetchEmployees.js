import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { fetchEmployeesSuccess } from "../modules/employee/actions";
import axios from "../utils/axiosInstance";
import { toast } from "react-toastify";
import logEvent from "../utils/logger";
import { ERROR, INFO } from "../constants/sanityConst";

const fetchEmployees = async () => {
  try {
    const response = await axios.get("employee");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch employees");
  }
};

const useFetchEmployees = () => {
  const dispatch = useDispatch();
  return useQuery(["fetch-employees"], fetchEmployees, {
    onSuccess: (data) => {
      dispatch(fetchEmployeesSuccess(data));
      logEvent(INFO, "Employees Fetched", {
        additionalData: JSON.stringify(data),
      });
    },
    onError: (error, variables, context) => {
      toast.error("Failed to fetch employees 😲");
      logEvent(ERROR, error.message, { additionalData: error.stack });
    },
    staleTime: 10000, // 10 seconds
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
};

export default useFetchEmployees;
