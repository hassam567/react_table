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
  <BrowserRouter basename="/react_table">
    <Routes>
        <Route path="/" element={<Instructions />} />
        <Route path="/users" element={<UsersTable />} />
        <Route path="/comments" element={<CommentsTable />} />
        {RoutesArray()}
    </Routes>
</BrowserRouter>
    </QueryClientProvider>
   
    </>
   
  );
}

export default App;
