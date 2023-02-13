const React = require('react');
const Layout = require('../Layout');

module.exports = function ShowEntry({}) {
  return (
    <Layout>
      <h1></h1>

      <span className="entry-date block font-3-4 c-lt-gray">Written on</span>
      <p></p>

      <ul id="editAndDeleteUl" className="no-bullets no-padding mar-t-2">
        <li className="pipe-separate left">
          <a href={`/`} className="c-white">edit</a>
        </li>

        <li className="pipe-separate left">
          <button
            id="deleteEntryButton"
            value="delete"
            type="button"
            className="no-border no-outline no-bg c-white hover-underline"
          >
            delete
          </button>
        </li>
      </ul>
    </Layout>
  );
};
