import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Table, TableBody, TableCell, TableHead, TableRow, 
  Typography, Paper, TableContainer, IconButton, Button, TablePagination, Box 
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { customerApi } from '../../services/api';
import { Customer } from '../../types';
import CreateCustomer from './CreateCustomer';
import { tableStyles } from '../../styles/tableStyles';

const CustomerList = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [page, setPage] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    loadCustomers();
  }, [page, rowsPerPage]);

  const loadCustomers = async () => {
    try {
      const response = await customerApi.getAll(page, rowsPerPage);
      setCustomers(response.data.content);
      setTotalElements(response.data.totalElements);
    } catch (error) {
      console.error('Erreur lors du chargement des clients:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await customerApi.delete(id);
      loadCustomers();
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
    }
  };

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ textAlign: 'center' }} gutterBottom>
        Liste des Clients
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpenCreateDialog(true)}
        sx={{ mb: 3, display: 'block', margin: '0 auto' }}
      >
        Nouveau Client
      </Button>
      <TableContainer component={Paper} sx={tableStyles.container}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={tableStyles.headerCell}>Nom</TableCell>
              <TableCell sx={tableStyles.headerCell}>Email</TableCell>
              <TableCell sx={tableStyles.headerCell}>Adresse</TableCell>
              <TableCell sx={tableStyles.headerCell}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id} sx={tableStyles.row}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.address}</TableCell>
                <TableCell>
                  <IconButton 
                    onClick={() => navigate(`/customers/${customer.id}/accounts`)}
                    color="primary"
                  >
                    <AccountBalanceIcon />
                  </IconButton>
                  <IconButton 
                    onClick={() => handleDelete(customer.id)}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={totalElements}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
          labelRowsPerPage="Lignes par page"
          labelDisplayedRows={({ from, to, count }) => 
            `${from}-${to} sur ${count !== -1 ? count : `plus de ${to}`}`}
          sx={{
            '.MuiTablePagination-toolbar': {
              backgroundColor: 'background.default'
            }
          }}
        />
      </TableContainer>
      <CreateCustomer
        open={openCreateDialog}
        onClose={() => setOpenCreateDialog(false)}
        onSuccess={loadCustomers}
      />
    </Box>
  );
};

export default CustomerList; 