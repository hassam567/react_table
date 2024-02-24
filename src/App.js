import React from 'react';
import Layout from './layout';
import RoutesArray from './routes/routesArray';
import { QueryClient, QueryClientProvider } from 'react-query';
import CommentsTable from './TablesData/CommentsTable';
import UsersTable from './TablesData/UsersTable';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Instructions from './Instructions';
const queryClient = new QueryClient();

function App() {
  return (
    <>
  <QueryClientProvider client={queryClient}>
  <Router>
      <Routes>
        <Route path="users" element={<UsersTable />} />
        <Route path="comments" element={<CommentsTable />} />
        <Route path="/react_table" element={<Instructions />} />
        {RoutesArray()}
      </Routes>
    </Router>
    </QueryClientProvider>
   
    </>
   
  );
}

export default App;
