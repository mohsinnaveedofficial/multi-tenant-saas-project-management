import React from 'react'
import StatusTag from './statusTag'
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineEdit } from 'react-icons/ai';
import EditFinancials from './admin/EditFinancials';

function FinanceTableRow({project,revenue,cost,profit,margin,status}) {
  return (

        <tr className="text-center bg-white h-12   ">
        <td className=' text-gray-900 '>{project}</td>
        <td className='font-medium text-green-600 text-sm'>{revenue}</td>
        <td className='font-medium text-red-600'>{cost}</td>
        <td className='font-medium text-blue-600 '>{profit}</td>
        <td className='text-center font-medium text-gray-900'>{margin}</td>
        <td > <StatusTag status={status}/> </td>
        <td className='text-center flex justify-center items-center pt-3'> <EditFinancials  /> <RiDeleteBinLine className='inline ms-2 mt-1 text-red-600' /></td>
     
    </tr>
    )
}

export default FinanceTableRow