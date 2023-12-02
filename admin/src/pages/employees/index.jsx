import {
  DataGrid,
  GridToolbar,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { useEmployeeContext } from "../../hooks/useEmployeeContext";
import { Box } from "@mui/material";

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  return (
    <Pagination
      color="secondary"
      variant="text"
      shape="circular"
      page={page + 1}
      count={pageCount}
      // @ts-expect-error
      renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

const columns = [
  {
    field: "eId",
    headerName: "ID",
    width: 90,
    flex: 0.2,
    align: "center",
    headerAlign: "center",
    type: "string",
  },
  {
    field: "Employee",
    headerName: "Employee",
    width: 90,
    flex: 0.6,
    align: "center",
    headerAlign: "center",
    type: "string",
    renderCell: (params) => (
      <div className="flex w-full justify-between pl-6 items-center">
        <img
          src={params.row.photo.filePath}
          alt="employee"
          className="w-[40px] h-[35px] object-cover"
        />
        <p className="w-[130px]">{params.row.fullName}</p>
      </div>
    ),
  },
  {
    field: "fullName",
    headerName: "Employee",
    width: 90,
    flex: 0.5,
    align: "center",
    headerAlign: "center",
    type: "string",
  },
  {
    field: "email",
    headerName: "End",
    width: 90,
    flex: 0.5,
    align: "center",
    headerAlign: "center",
    type: "string",
  },
  {
    field: "role",
    headerName: "Manager Name",
    width: 90,
    flex: 0.5,
    align: "center",
    headerAlign: "center",
    type: "string",
  },

  {
    field: "mobile",
    headerName: "Delete",
    sortable: false,
    flex: 0.5,
    align: "center",
    headerAlign: "center",
  },
];

function EmployeesPage() {
  const { employees } = useEmployeeContext();

  return (
    <div className="mx-10">
      <Box sx={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={employees}
          columns={columns}
          rowHeight={55}
          getRowId={(row) => row._id}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 7,
              },
            },
          }}
          slots={{
            toolbar: GridToolbar,
            //pagination: CustomPagination,
          }}
          showColumnVerticalBorder={true}
          showCellVerticalBorder={true}
          sx={{
            "& .MuiDataGrid-columnHeaders": {
              fontFamily: "Barlow Semi Condensed",
              fontSize: "18px",
              fontWeight: "400",
              backgroundColor: "#002147",
              color: "#fff",
              // border: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: "#fff",
              color: "#000",
              fontFamily: "roboto",
              fontSize: "12px",
              fontWeight: "400",
            },
            // "& .MuiDataGrid-footerContainer": {
            //   backgroundColor: "#fff",
            //   paddingRight: "45%",
            // },
            "& .MuiDataGrid-toolbarContainer": {
              backgroundColor: "#fff",
              //center the toolbar
              //paddingLeft: "10%",

              "& .MuiButton-text": {
                color: "#002147",
              },
            },
            //remove cell horizontal border
            "& .MuiDataGrid-cell": {
              //borderBottom: "none",
            },
          }}
        />
      </Box>
    </div>
  );
}

export default EmployeesPage;
