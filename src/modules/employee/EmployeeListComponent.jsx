import React, { useState } from "react";
import { useSelector } from "react-redux";
import useFetchEmployees from "../../hooks/useFetchEmployees";
import GridView from "./components/GridComponent";
import TableView from "./components/TableComponent";
import Loading from "../../common/components/LoadingComponent";
import ErrorComponent from "../../common/components/ErrorComponent";
import Toolbar from "./components/ToolbarComponent";
import PopUp from "../../common/components/PopUpComponent";
import useDeleteEmployee from "../../hooks/useDeleteEmployee";

export default function EmployeeList() {
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

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <ErrorComponent error={error} />;
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Toolbar />
        </div>
        {showGridView ? (
          <GridView employees={employees} handleDelete={openDeletePopUp} />
        ) : (
          <TableView employees={employees} handleDelete={openDeletePopUp} />
        )}
      </div>
      <PopUp
        show={showConfirmation}
        hide={handleClose}
        onConfirm={handleConfirmDelete}
        title={"Confirm Deletion"}
        message={`Are you sure you want to delete ${selectedEmployee.first_name} ${selectedEmployee.last_name} ?`}
      />
    </>
  );
}
