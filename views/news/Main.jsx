const React = require('react');
const Layout = require('../Layout');

module.exports = function Main({ responce }) {
  return (
    <Layout >
      <main role="main">
        <ul className="entries-list no-bullets no-padding">
          {responce.articles.map((entry,index) => (
            <li className="entry-item pad-b-4" key={entry.id}>
              <a href={`/${index}`} className="entry-title font-2 pad-b-1-4 c-white">{entry.title}</a>
              <span className="entry-date block font-3-4 c-lt-gray"> Written on {new Date(entry.publishedAt).toLocaleDateString()}</span>
              <p className="entry-stub">{entry.content}</p>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
};
