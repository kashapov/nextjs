import React from "react";
import Link from "next/link";
import Router from "next/router";

import User from "../../components/User";

const authIndexPage = () => (
  <div>
    <h1>The Auth Page</h1>
    <p>
      Go to <Link href="/">Main</Link>
    </p>
    <button onClick={() => Router.push("/")}>Go to Main</button>
    <User name="Andrey" age={35} />
  </div>
);

export default authIndexPage;
