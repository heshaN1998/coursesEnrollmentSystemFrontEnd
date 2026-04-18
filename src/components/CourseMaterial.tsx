import Table from 'react-bootstrap/Table';
import { getCourseMaterialDtata } from '../service/CourseMaterialService';
import { useEffect } from 'react';

export const CourseMaterial=()=>{
  useEffect(()=>{
    const loadData=async()=>{
      const importedDta=await getCourseMaterialDtata();
      console.log(importedDta)
    };
    loadData();
},[])
    return(
<>
    <Table striped>
      <thead>
        <tr>
          <th>Material ID</th>
          <th>File Name</th>
          <th>Material Type</th>
          <th>Material</th>
          <th>Upload At</th>
          <th>Course ID</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          
        </tr>
        
      </tbody>
    </Table>

</>
    );
}