import React, { useState } from "react";
import { useSelector } from "react-redux";
import useFetchEmployees from "../../../hooks/useFetchEmployees";
import GridView from "../../organisms/Grid";
import TableView from "../../organisms/Table";
import Loading from "../../pages/LoadingComponent";
import ErrorComponent from "../../pages/ErrorComponent";
import Toolbar from "../../organisms/ToolBar";
import PopUp from "../../organisms/PopUp";
import useDeleteEmployee from "../../../hooks/useDeleteEmployee";
import ContentFluidPage from "../../templates/ContentFluidPage";
import { useNavigate } from "react-router-dom";

export default function EmployeeList() {
  const navigate = useNavigate();

  const { employees, showGridView } = useSelector((state) => state.employee);

  const { isLoading, isError, error } = useFetchEmployees();
  const deleteEmployeeMutation = useDeleteEmployee();

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState({});

  const handleConfirmDelete = () => {
    deleteEmployeeMutation.mutate(selectedEmployee._id);
    setSelectedEmployee({});
    setShowConfirmation(false);
  };

  const openDeletePopUp = (employee) => {
    setSelectedEmployee(employee);
    setShowConfirmation(true);
  };

  const handleClose = () => {
    setSelectedEmployee({});
    setShowConfirmation(false);
  };

  const handleEdit = (employee) => {
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
        message={`Are you sure you want to delete ${selectedEmployee.first_name} ${selectedEmployee.last_name} ?`}
      />
    </ContentFluidPage>
  );
}
