import React from 'react';
import Layout from './layout';
import RoutesArray from './routes/routesArray';
import { QueryClient, QueryClientProvider } from 'react-query';
import CommentsTable from './TablesData/CommentsTable';
import UsersTable from './TablesData/UsersTable';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Instructions from './Instructions';
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/react_table" element={<Instructions />} />
            <Route path="/react_table/users" element={<UsersTable />} />
            <Route path="/react_table/comments" element={<CommentsTable />} />
            {RoutesArray()}
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
