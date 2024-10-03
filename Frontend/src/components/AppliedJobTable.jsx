import React from 'react'
import { Table ,TableCaption,TableHeader, TableRow,TableHead, TableBody,TableCell} from './ui/table'
import { Badge } from './ui/badge'

function AppliedJobTable() {
  return (
    <div>
         <Table>
            <TableCaption>
                A List of your recent applied  Jobs
            </TableCaption>
             <TableHeader>
                   <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Job Role</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead className="text-right">Status</TableHead>
                   </TableRow>
             </TableHeader>

             <TableBody>
                {
                    [1,2].map((item,index)=>
                        <TableRow key={index}>
                            <TableCell>
                                17-07-2024
                            </TableCell>
                            <TableCell>
                               FrontEnd Developer 
                            </TableCell>
                            <TableCell>
                                Google
                            </TableCell>
                            <TableCell className="text-right">
                               <Badge>Selected</Badge>
                            </TableCell>
                        </TableRow>
                    )
                }
             </TableBody>
         </Table>
    </div>
  )
}

export default AppliedJobTable
