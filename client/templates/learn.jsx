LearnBody = React.createClass({

  render() {
    return (
      <eeio-projects-shortlist className="ng-isolate-scope">
        {config.pages.learn.links.map(link =>
          <div>
            <a href={link.href} className="ng-scope">
              <h1 className="ng-binding">{link.header}</h1>
              <p className="ng-binding">{link.desc}</p>
            </a>
          </div>
        )}
      </eeio-projects-shortlist>
    );
  }

});

LearnTitle = React.createClass({

  render() {
    return (
      <div >
        <h1 className="ng-scope">Learn & get started with Java EE</h1>
        <p className="ng-scope">Duis aliquam arcu sed felis congue aliquet. Maecenas ullamcorper lacus bibendum vulputate interdum.</p>
      </div>
    );
  }

});

render.learn = render(<MainSkeleton body=<LearnBody/> title=<LearnTitle/> />);
