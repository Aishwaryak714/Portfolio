import React from 'react';

function Home(props) {

    let status=((localStorage.getItem("status")));

    if(status==="log-in")
    {
        return (
            <div>
               <h1>Dashboard!!!!</h1>
            </div>
        );
    }

    else
    {
        return (
            <div>
               <h1>Home!!!!</h1>
            </div>
        );
    }

}

export default Home;