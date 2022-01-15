import React from 'react'
import { Redirect } from 'react-router'
import { Route } from 'react-router-dom'

export default function PrivateRoute({page:Component,token:token,path:path}) {
    return (
        <Route exact path = {path}>
            {token.get('token')?<Component/>:<Redirect to = {{'pathname':'/signin'}}/>}
        </Route>
    )
}
