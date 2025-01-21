import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper } from '@mui/material';

const Home = () => {
 
    const rows = [
        { date: '2025-01-21', customer: 'Customer A', location: 'Location 1', shopHours: 8, travelHours: 2, groundHours: 4, towerHours: 6 },
        { date: '2025-01-22', customer: 'Customer B', location: 'Location 2', shopHours: 7, travelHours: 1.5, groundHours: 3, towerHours: 5 },
        { date: '2025-01-23', customer: 'Customer C', location: 'Location 3', shopHours: 9, travelHours: 3, groundHours: 5, towerHours: 7 },
    ];

    return (
        <TableContainer component={Paper}>
        <Table>
           
            <TableHead>
            <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Shop Hours</TableCell>
                <TableCell>Travel Hours</TableCell>
                <TableCell>Ground Hours</TableCell>
                <TableCell>Tower Hours</TableCell>
            </TableRow>
            </TableHead>

       
            <TableBody>
            {rows.map((row, index) => (
                <TableRow key={index}>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.customer}</TableCell>
                    <TableCell>{row.location}</TableCell>
                    <TableCell>{row.shopHours}</TableCell>
                    <TableCell>{row.travelHours}</TableCell>
                    <TableCell>{row.groundHours}</TableCell>
                    <TableCell>{row.towerHours}</TableCell>
                </TableRow>
            ))}
            </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Home;
