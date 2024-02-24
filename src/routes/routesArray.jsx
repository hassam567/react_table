import React from 'react'

import { Route } from 'react-router-dom';
import CommentsTable from '../TablesData/CommentsTable'

import UsersTable from '../TablesData/UsersTable';
import Instructions from '../Instructions';
const routes = [
  {
    path: '/react_table/comments',
    component: CommentsTable
  },
  {
    path: '/react_table/users',
    component: UsersTable
  }
  ,

  {
    path: '/react_table',
    component: Instructions
  }
];
function routesArray() {
  return (
    <>
         {routes.map((route, index) => (
        <Route key={index} path={route.path} exact component={route.component} />
      ))}
    </>
  )
}

export default routesArray
