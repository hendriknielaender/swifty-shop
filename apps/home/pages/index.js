import React, { Fragment, Suspense } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { lazy } from 'react';
let useCustomHook;
let RemoteTitle = () => null;
if (process.browser) {
  //useCustomHook = require('shop/customHook').default;
  RemoteTitle = lazy(() => {
    return import('checkout/title');
  });
}
console.log('test');

const Home = ({ loaded }) => {
  if (process.browser) {
    // useCustomHook();
  }
  return (
    <div style={{ border: "1px solid red" }}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="hero">
        <RemoteTitle />
        <h1 className="title">
          Welcome to Next.js on Webpack 5! <code>home</code>
        </h1>
        <p className="description">
          To get started, edit <code>pages/index.js</code> and save to reload.
        </p>

      </div>

    </div>
  );
};
//
Home.getInitialProps = async ctx => {
  return {};
};

export default Home;
