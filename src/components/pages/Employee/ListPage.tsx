import React, { useState } from "react";
import useFetchEmployees from "../../../hooks/useFetchEmployees";
import GridView from "../../organisms/Grid";
import TableView from "../../organisms/Table";
import Loading from "../LoadingComponent";
import ErrorComponent from "../ErrorComponent";
import Toolbar from "../../organisms/ToolBar";
import PopUp from "../../organisms/PopUp";
import useDeleteEmployee from "../../../hooks/useDeleteEmployee";
import ContentFluidPage from "../../templates/ContentFluidPage";
import { useNavigate } from "react-router-dom";
import { Employee } from "../../../types";
import { useAppSelector } from "../../../redux/hooks";

const EmployeeList: React.FC = () => {
  const navigate = useNavigate();

  const { employees, showGridView } = useAppSelector((state) => state.employee);

  const { isLoading, isError, error } = useFetchEmployees();
  const deleteEmployeeMutation = useDeleteEmployee();

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | {}>({});

  const handleConfirmDelete = () => {
    if (
      selectedEmployee &&
      "_id" in selectedEmployee &&
      selectedEmployee._id !== undefined
    ) {
      deleteEmployeeMutation.mutate(selectedEmployee._id);
      setSelectedEmployee({});
      setShowConfirmation(false);
    }
  };

  const openDeletePopUp = (employee: Employee) => {
    setSelectedEmployee(employee);
    setShowConfirmation(true);
  };

  const handleClose = () => {
    setSelectedEmployee({});
    setShowConfirmation(false);
  };

  const handleEdit = (employee: Employee) => {
    navigate(`/employee/edit/${employee._id}`);
  };

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <ErrorComponent error={error} />;
  }

  return (
    <ContentFluidPage>
      <div className="row">
        <Toolbar />
      </div>
      {showGridView ? (
        <GridView
          employees={employees}
          handleDelete={openDeletePopUp}
          handleEdit={handleEdit}
        />
      ) : (
        <TableView
          employees={employees}
          handleDelete={openDeletePopUp}
          handleEdit={handleEdit}
        />
      )}
      <PopUp
        show={showConfirmation}
        hide={handleClose}
        onConfirm={handleConfirmDelete}
        title={"Confirm Deletion"}
        message={`Are you sure you want to delete ${
          (selectedEmployee as Employee).first_name
        } ${(selectedEmployee as Employee).last_name} ?`}
      />
    </ContentFluidPage>
  );
};

export default EmployeeList;
