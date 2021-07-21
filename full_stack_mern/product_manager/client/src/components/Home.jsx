import React, { useState } from 'react';
import { Router } from '@reach/router';

import Form from './Form';
import Detail from './Detail';

const Home = () =>  {

    return(
        <div>
            <Form />
            <Router>
                <Detail path = "/products/:_id"/>
            </Router>
        </div>
    )
}

export default Home;
