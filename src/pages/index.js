import * as React from 'react';
import { Link } from 'gatsby';

export default function IndexPage() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link to="/about">About this site</Link>
    </main>
  );
}
