import './datatable.scss'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { userColumns, userRows } from '../../datatablesource';
import { Link } from 'react-router-dom'

const Datatable = () => {
    const actionColumn = [{
        field: 'action', headerName: 'Action', width: 200, renderCell: () => {
            return (
                <div className='cellAction'>
                    <Link to="/users/test" style={{ textDecoration: 'none' }}>
                        <div className="btn viewButton">View</div>
                    </Link>
                    <Link to="/users/new" style={{ textDecoration: 'none' }}>
                        <div className="btn editButton">Edit</div>
                    </Link>
                    <div className="btn deleteButton">Delete</div>
            </div>
        )
    } }];
  return (
      <div className='datatable'>
          <div className="datatableTitle">
              Add New User
              <Link to="/users/new" style={{ textDecoration: 'none' }} className='link'>
                  Add New
              </Link>
          </div>
          <DataGrid
              rows={userRows}
              columns={userColumns.concat(actionColumn)}
              pageSize={10}
              rowsPerPageOptions={[10]}
              checkboxSelection
          />
    </div>
  )
}

export default Datatable
