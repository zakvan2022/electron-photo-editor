import React from 'react';
import {Switch} from 'react-router-dom';
import {routes} from "./index";

type Props = {
    authenticated: Boolean
}

function Routes(props: Props) {
    return (
        <Switch>
            {routes.map((route, index) => {
                return (
                    <route.route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={()=>{
                            return <route.component {...props}/>
                        }}
                    />
                )
            })}
        </Switch>
    )
}

export default Routes;