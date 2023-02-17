const React = require('react');
const Layout = require('./Layout');

module.exports = function Account({ session, result }) {
  return (
    <Layout session={session}>
      <main role="main">
        <ul className="entries-list no-bullets no-padding penis">
          {result.map((entry) => (
            <li className="entry-item pad-b-4 zopa" id={entry.id}>
              <a href={`/allnews/${entry.id}`} className="entry-title font-2 pad-b-1-4 c-white">{entry.title}</a>
              <span className="entry-date block font-3-4 c-lt-gray">
                {' '}
                Written on
                {' '}
                {new Date(entry.publishedAt).toLocaleDateString()}
              </span>
              <p className="entry-stub">{entry.body}</p>
              <button data-deletid={entry.id}
                id={`button${entry.id}`}
                value="button"
                type="button"
                className="no-border no-outline no-bg c-white hover-underline">
                Delete from 'favorite'
              </button>

            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
};
