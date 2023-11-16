import React, { useState } from 'react';
import DataTable from './logdatatable';
import DataTableTask from './logdatatabletask';
import DataTableEvidencia from './logdatatableevidences';
import DataTableRoles from './logdatatableroles';
import DataTableUser from './logdatatableuser';
import DataTableTemplate from './logdatatemplate';
import DataTableTemplateTask from './logdatatabletemplatetask';
import DataTableTemplateEvidencia from './logdatatabletemplatesevidencias';






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
        <option value="DataTableTemplate">LogTemplateProcessos</option>
        <option value="DataTableTemplateTask">LogTemplateTask</option>
        <option value="DataTableTemplateEvidencia">LogTemplateEvidencia</option>
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
        ): selectedOption == 'DataTableTemplate' ?(
          <DataTableTemplate/>
        ):selectedOption == 'DataTableTemplateTask' ?(
          <DataTableTemplateTask/>
        ):selectedOption == 'DataTableTemplateEvidencia' ?(
          <DataTableTemplateEvidencia/>
        ):null}
      </div>

    </div>
  );
};

export default DataTableRender;