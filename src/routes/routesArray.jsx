import React from 'react'

import { Route } from 'react-router-dom';
import CommentsTable from '../TablesData/CommentsTable'

import UsersTable from '../TablesData/UsersTable';
import Instructions from '../Instructions';
const routes = [
  {
    path: '/comments',
    component: CommentsTable
  },
  {
    path: '/users',
    component: UsersTable
  }
  ,

  {
    path: '/',
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
