const React = require('react');
const Layout = require('../Layout');

module.exports = function Main({ result, session}) {
  return (
    <Layout session={session}>
      <main role="main">
        <ul className="entries-list no-bullets no-padding">
          {result.map((entry) => (
            <li className="entry-item pad-b-4" key={entry.id}>
              <a href={`/allnews/${entry.id}`} className="entry-title font-2 pad-b-1-4 c-white">{entry.title}</a>
              <span className="entry-date block font-3-4 c-lt-gray"> Written on {new Date(entry.publishedAt).toLocaleDateString()}</span>
              <p className="entry-stub">{entry.body}</p>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
};
