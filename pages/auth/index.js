import React from "react";
import Link from "next/link";
import Router from "next/router";

import User from "../../components/User";

const authIndexPage = (props) => (
  <div>
    <h1>The Auth Page of {props.appName}</h1>
    <p>
      Go to <Link href="/">Main</Link>
    </p>
    <button onClick={() => Router.push("/")}>Go to Main</button>
    <User name="Andrey" age={35} />
  </div>
);

authIndexPage.getInitialProps = (context) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: "Next.js App (Auth)" });
    }, 1000);
  });

  return promise;
};

export default authIndexPage;
