import React, { useState } from 'react';
import DataTable from './logdatatable';
import DataTableTask from './logdatatabletask';
import DataTableEvidencia from './logdatatableevidences';
import DataTableRoles from './logdatatableroles';
import DataTableUser from './logdatatableuser';






const DataTableRender: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('DataTable');

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
        <select name="datatable" id="data" onChange={handleOptionChange} value={selectedOption}>
        <option value="DataTable">LogProcessos</option>
        <option value="DataTableTask">LogTask</option>
        <option value="DataTableEvidencia">LogEvidencia</option>
        <option value="DataTableRoles">LogRoles</option>
        <option value="DataTableUser">LogUser</option>
      </select>
      <div>
      {selectedOption === 'DataTable' ? (
          <DataTable />
        ) : selectedOption === 'DataTableTask' ? (
          <DataTableTask />
        ) : selectedOption === 'DataTableEvidencia' ? (
          <DataTableEvidencia />
        ) : selectedOption === 'DataTableRoles' ? (
          <DataTableRoles />
        ) : selectedOption == 'DataTableUser' ?(
            <DataTableUser />
        ):null}
      </div>

    </div>
  );
};

export default DataTableRender;