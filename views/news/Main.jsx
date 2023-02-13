const React = require('react');
const Layout = require('../Layout')

module.exports = function Main({ message, error }) {
  return (
    <Layout>
      <span>Hello!</span>
      <div>
        <form action="/allnews" method='POST'>
          <input type="text" />
          <button>Try me</button>
        </form>
      </div>
    </Layout>
  );
};

