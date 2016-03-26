Main = React.createClass({

  render() {
    return (
      <div className="app-body ng-scope">
        <eeio-header className="home ng-scope ng-isolate-scope">
          <div>
            <div className="background"></div>
              <div className="head">
                <a href="."><img src="/images/logo.png"/></a>
                  <ul>
                  <li><a href=".">Specs</a></li>
                  <li><a href="contributors">Contributors</a></li>
                </ul>
              </div>
              <div className="title">
                <div >
                  <h1 className="ng-scope">Curabitur ullamcorper in arcu in hendrerit</h1>
                  <p className="ng-scope">Duis aliquam arcu sed felis congue aliquet. Maecenas ullamcorper lacus bibendum vulputate interdum.</p>
                </div>
              </div>
            </div>
          </eeio-header>
          <div className="page-body home ng-scope">
            <eeio-projects-shortlist className="ng-isolate-scope">
              <div>
                <a href="project/jcpevangelists/javaee.samples/README.md" className="ng-scope">
                  <h1 className="ng-binding">JavaEE Samples</h1>
                  <p className="ng-binding">A set of examples from github.</p>
                </a>
              </div>
            </eeio-projects-shortlist>
          </div>
          <eeio-footer className="ng-scope ng-isolate-scope">
            <div>
              <a href="."><img src="/images/logo.png"/></a>
              <ul>
                <li><a href=".">Specs</a></li>
                <li><a href="contributors">Contributors</a></li>
              </ul>
            </div>
          </eeio-footer>
        </div>
    );
  },

});

Main.run = function () {
  if (Meteor.isClient) {
      Meteor.startup(function() {
        console.log('startup');
          // Use Meteor.startup to render the component after the page is ready
          ReactDOM.render(<Main />, document.getElementById("render-target-main"));
          console.log('startup END');
      })
  }
}
