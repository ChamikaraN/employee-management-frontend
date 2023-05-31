import axios from "../utils/axiosInstance";
import { Employee } from "../types"; 

export const addEmployee = async (employeeData: Employee): Promise<Employee> => {
  try {
    const response = await axios.post<Employee>("employee", employeeData);
    return response.data;
  } catch (error) {
    throw new Error("Failed to add employee");
  }
};

export const fetchEmployees = async (): Promise<Employee[]> => {
  try {
    const response = await axios.get<Employee[]>("employee");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch employees");
  }
};

export const editEmployee = async (employeeData: Employee): Promise<Employee> => {
  try {
    const response = await axios.put<Employee>(`employee/${employeeData.id}`, employeeData);
    return response.data;
  } catch (error) {
    throw new Error("Failed to edit employee");
  }
};

export const deleteEmployee = async (id: string): Promise<void> => {
  try {
    await axios.delete(`employee/${id}`);
  } catch (error) {
    throw new Error(`Failed to delete employee with id ${id}`);
  }
};
