import React, { useState } from 'react';
import { Router } from '@reach/router';

import Form from './Form';
import Detail from './Detail';
import Edit from './Edit';

const Home = () =>  {

    return(
        <div>
            <Router>
                <Form path = "/" />
                <Detail path = "/products/:_id"/>
                <Edit path = "/products/:_id/edit"/>
            </Router>
        </div>
    )
}

export default Home;
