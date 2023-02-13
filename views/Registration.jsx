const React = require('react');
const Layout = require('./Layout');

module.exports = function Registraton() {
  return (
    <Layout>
      <form action="/registartion" method="POST" name="registrationForm">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="text" className="form-control" id="exampleInputEmail1" name="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">User name</label>
          <input type="text" className="form-control" id="exampleInputUserName" name="userName" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" />
        </div>
        <button type="submit" className="btn btn-primary">Log In!</button>
      </form>
    </Layout>
  );
};
