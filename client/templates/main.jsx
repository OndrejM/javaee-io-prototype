MainBody = React.createClass({

  render() {
    return (
      <eeio-projects-shortlist className="ng-isolate-scope">
        <div>
          <a href="project/jcpevangelists/javaee.samples/README.md" className="ng-scope">
            <h1 className="ng-binding">JavaEE Samples</h1>
            <p className="ng-binding">A set of examples from github.</p>
          </a>
        </div>
      </eeio-projects-shortlist>
    );
  }

});

MainTitle = React.createClass({

  render() {
    return (
      <div >
        <h1 className="ng-scope">Curabitur ullamcorper in arcu in hendrerit</h1>
        <p className="ng-scope">Duis aliquam arcu sed felis congue aliquet. Maecenas ullamcorper lacus bibendum vulputate interdum.</p>
      </div>
    );
  }

});

render.main = render(<MainSkeleton body=<MainBody/> title=<MainTitle/> />);
