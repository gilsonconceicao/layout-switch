import React, { useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import getData from '../../api/getUsers';
import ButtonUser from '../buttons/ButtonUser';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: '1100px', 
      margin: '30px auto' 
    },
    paper: {    
      height: 200,
      width: 300, 
      boxShadow: '0px 0px 10px #00002222', 
      margin: '10px', 
      textAlign: 'center', 
    },
    user: {
        display: 'block', 
        lineHeight: '2em'
    }, 
    control: {
      padding: theme.spacing(2),
    },
  }),
);

export default function Users () {
  const [users, setUsers] = React.useState([]);
  const [spacing, setSpacing] = React.useState<GridSpacing>(2);
  const classes = useStyles();

  //get users
  

  useEffect(() => {
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
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {users.map((user) => (
            <Grid key={user} className={classes.paper}  item>
              <p className={classes.user}>{user['name']}</p>
              <p className={classes.user}>{user['email']}</p>
              <ButtonUser/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
