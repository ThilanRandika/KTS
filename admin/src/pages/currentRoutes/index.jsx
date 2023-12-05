import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, IconButton } from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useRoadRouteContext } from "../../hooks/useRoadRouteContext";
import RouteTableMap from "./RouteTableMap";

const columns = [
  {
    field: "rId",
    headerName: "ID",
    width: 90,
    flex: 0.3,
    align: "center",
    headerAlign: "center",

    renderCell: (params) => <div>{params.row.startLocation.name}</div>,
  },
  {
    field: "stations",
    headerName: "Stations",
    width: 90,
    flex: 0.3,
    align: "center",
    headerAlign: "center",

    renderCell: (params) => (
      <div>
        {params.row.stations.map((station) => (
          <div key={`${station.id} ${station.lat} ${station.lng}`}>
            {station.id}
          </div>
        ))}
      </div>
    ),
  },
  {
    field: "prices",
    headerName: "Prices",
    width: 90,
    flex: 0.3,
    align: "center",
    headerAlign: "center",

    renderCell: (params) => (
      <div>
        {params.row.stations.map((station) => (
          <div key={`${station.id} ${station.lat} ${station.lng}`}>
            {station.price}
          </div>
        ))}
      </div>
    ),
  },
  {
    field: "distance",
    headerName: "Distance",
    width: 90,
    flex: 0.3,
    align: "center",
    headerAlign: "center",

    renderCell: (params) => (
      <div>
        {params.row.stations.map((station) => (
          <div key={`${station.id} ${station.lat} ${station.lng}`}>
            {station.distance}
          </div>
        ))}
      </div>
    ),
  },
  {
    field: "map",
    headerName: "Map",
    width: 90,
    flex: 1,
    align: "center",
    headerAlign: "center",

    renderCell: (params) => (
      <div className="w-full h-full">
        <RouteTableMap
          googleRoutes={params.row.googleRoutes}
          stations={params.row.stations}
        />
      </div>
    ),
  },
  //   {
  //     field: "photo",
  //     headerName: "Photo",
  //     width: 90,
  //     flex: 0.2,
  //     align: "center",
  //     headerAlign: "center",
  //     type: "string",
  //     renderCell: (params) => (
  //       <div className="flex w-full items-center justify-center">
  //         <img
  //           src={params.row.photo.filePath}
  //           alt="employee"
  //           className="w-full h-[72px] object-cover"
  //         />
  //       </div>
  //     ),
  //   },
  //   {
  //     field: "fullName",
  //     headerName: "Employee Name",
  //     width: 90,
  //     flex: 0.5,
  //     align: "center",
  //     headerAlign: "center",
  //     type: "string",
  //   },
  //   {
  //     field: "email",
  //     headerName: "Email",
  //     width: 90,
  //     flex: 0.5,
  //     align: "center",
  //     headerAlign: "center",
  //     type: "string",
  //   },
  //   {
  //     field: "mobile",
  //     headerName: "mobile Number",
  //     width: 90,
  //     flex: 0.5,
  //     align: "center",
  //     headerAlign: "center",
  //     type: "string",
  //     renderCell: (params) => <>+94{params.row.mobile}</>,
  //   },

  //   {
  //     field: "role",
  //     headerName: "Position",
  //     sortable: false,
  //     flex: 0.3,
  //     align: "center",
  //     headerAlign: "center",
  //   },
  //   {
  //     field: "edit",
  //     headerName: "Edit",
  //     sortable: false,
  //     flex: 0.15,
  //     align: "center",
  //     headerAlign: "center",
  //     renderCell: (params) => (
  //       <IconButton
  //         onClick={() => {
  //           // handleEditBus(params.row);
  //         }}
  //       >
  //         <DriveFileRenameOutlineIcon sx={{ fontSize: 18 }} />
  //       </IconButton>
  //     ),
  //   },
  //   {
  //     field: "delete",
  //     headerName: "Delete",
  //     sortable: false,
  //     flex: 0.15,
  //     align: "center",
  //     headerAlign: "center",
  //     renderCell: (params) => (
  //       <IconButton
  //         onClick={() => {
  //           //handleDeleteBus(params.row._id);
  //         }}
  //       >
  //         <DeleteOutlinedIcon sx={{ fontSize: 19 }} />
  //       </IconButton>
  //     ),
  //   },
];

function CurrentRoutes() {
  const { roadRoutes } = useRoadRouteContext();

  return (
    <div className="mx-[60px] mb-[60px]">
      <p className="text-main_blue text-[37px] font-semibold font-barlows  mb-[15px] leading-6">
        Employees Details
      </p>
      <div className="mt-[20px]">
        <Box sx={{ height: "100%", width: "100%" }}>
          <DataGrid
            rows={roadRoutes}
            columns={columns}
            rowHeight={400}
            getRowId={(row) => row._id}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 6,
                },
              },
            }}
            slots={{
              toolbar: GridToolbar,
              //pagination: CustomPagination,
            }}
            //showColumnVerticalBorder={true}
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
    </div>
  );
}

export default CurrentRoutes;
