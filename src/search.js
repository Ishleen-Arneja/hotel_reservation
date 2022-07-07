import React, {useState, useEffect} from 'react';
import ReservationTable from './table/reservation-table';
import Paper from '@mui/material/Paper';
import reservations from './reservations.json';
import Box from '@mui/material/Box';
import SearchBar from './search/search-bar';
import Buttons from './buttons';
import DialogBox from './form/dialog-box';
import AddForm from './form/add-form';
import RowContext from './row-context';

const checkLocalStorage = () => {
    const storage = localStorage.getItem("reservations") !== null ? JSON.parse(localStorage.getItem("reservations")) : reservations;
    return storage;
    
}
function Search() {
    const [rows, setRows] = useState(checkLocalStorage);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem("reservations", JSON.stringify(rows));
    }, [rows]);

    const handleSubmitForm = (item, action) => {
        if (action === 'add') {
            let max = 0;
            rows.forEach(row => {
                if (row.id > max) {
                max = row.id;
                }
            });
            item = {...item, ['id']: max + 1};
            setRows(prevArray => [...prevArray, item]);
        } else if (action === 'edit') {
           const editedIndex = rows.findIndex(x => x.id === item.id);
           rows[editedIndex] = item;
           setRows(rows);
        }
        else if (action === 'delete') {
            const filteredRow = rows.filter(row => row.id !== item.id);
            setRows(filteredRow);
        }
    }

    const handleModalClose = (value) => {
        setOpen(value);
    };
  
    const doSearch = (searchVal) => {
      const filteredData = reservations.filter((row) => {
        return (row.firstName.toLowerCase().includes(searchVal) || row.lastName.toLowerCase().includes(searchVal) || row.email.includes(searchVal) || row.phone.includes(searchVal));
      });
      setRows(filteredData);
    };
  
   const addReservation = (e) => {
    setOpen(true);
   }

   const addButtonStyle = {
    fontSize: '1.05rem'
   }

    return (
        <>
          <Paper>
            <Box>
                <SearchBar
                    placeholder = "Search by name, email address or phone number"
                    onChange={(event) => doSearch(event.target.value)}
                />
                <Box>
                    <Buttons
                        variant = "contained"
                        onClick = {addReservation}
                        size = "large"
                        name = "addForm"
                        sx = {addButtonStyle}
                    >
                        Add
                    </Buttons>
                </Box>
            </Box>
            
            <RowContext.Provider value={rows}>
                <ReservationTable 
                    data = {rows}
                    handleSubmitForm = {handleSubmitForm}
                    handleClose = {handleModalClose}
                    />
            </RowContext.Provider>
            
          </Paper>
          <DialogBox
                isOpen = {open}
                handleClose = {handleModalClose}
            >
                <AddForm 
                    handleSubmitForm = {handleSubmitForm}
                    handleClose = {handleModalClose}
                     />
        </DialogBox>
        </>
    )    
}

export default Search;