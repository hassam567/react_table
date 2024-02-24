import React from 'react';
import Layout from './layout';
import RoutesArray from './routes/routesArray';
import { QueryClient, QueryClientProvider } from 'react-query';
import CommentsTable from './TablesData/CommentsTable';
import UsersTable from './TablesData/UsersTable';
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom';
import Instructions from './Instructions';
const queryClient = new QueryClient();

function App() {
  return (
    <>
  <QueryClientProvider client={queryClient}>
   <BrowserRouter  basename='/react_table'>
      <Routes>
      <Route path="/react_table" element={<Instructions />} />
        <Route path="/react_table/users" element={<UsersTable />} />
        <Route path="/react_table/comments" element={<CommentsTable />} />
       
        {RoutesArray()}
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
   
    </>
   
  );
}

export default App;
