import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import getData from '../../api/getUsers';
import ButtonUser from '../buttons/ButtonUser';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '900px', 
      margin: '30px auto'
    }
  }),
);

export default function UsersRow() {
    const classes = useStyles();
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        const getDataUsers = async () => {
            getData.get('/users')
             .then(response => response.data)
             .then((data) => {
                setUsers(data); 
                console.log(data);
            })     
        }
        getDataUsers();
      }, [])

    return (
        <TableContainer className='position_table'>
            <Table className={classes.root} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Lasname</TableCell>
                        <TableCell align="right">E-mail</TableCell>
                        <TableCell align="right">Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((row) => (
                        <TableRow
                            key={row['name']}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row['id']}
                            </TableCell>
                            <TableCell align="right">{row['name']}</TableCell>
                            <TableCell align="right">{row['email']}</TableCell>
                            <TableCell align="right">{row['username']}</TableCell>
                            <TableCell align="right">
                                <ButtonUser/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
