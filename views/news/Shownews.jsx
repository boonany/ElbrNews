const React = require('react');
const Layout = require('../Layout');

module.exports = function ShowEntry({ find, session }) {
  return (
    <Layout session={session}>
      <h1>{find.title}</h1>

      <span className="entry-date block font-3-4 c-lt-gray">
        Written on
        {' '}
        {new Date(find.publishedAt).toLocaleDateString()}
      </span>
      <p>{find.body}</p>
      <p>
        <a href={find.origin_url} style={{ color: 'white' }}>Read the news in the source</a>
        {' '}
      </p>

      <ul id="editAndDeleteUl" className="no-bullets no-padding mar-t-2">
        <li className="pipe-separate left">
          <button
            data-entryid={find.id}
            id="favoriteEntryButton"
            value="button"
            type="button"
            className="no-border no-outline no-bg c-white hover-underline"
          >
            Add to favorite
          </button>
        </li>
      </ul>

    </Layout>
  );
};
