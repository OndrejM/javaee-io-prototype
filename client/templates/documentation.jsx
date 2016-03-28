DocBody = React.createClass({

  render() {
    return (
      <eeio-projects-shortlist className="ng-isolate-scope">
        {config.pages.documentation.links.map(link =>
          <div>
            <a href={link.href} className="ng-scope">
              <h1 className="ng-binding">{link.header}</h1>
              <p className="ng-binding">{link.desc}</p>
            </a>
          </div>
        )}
        <h1>JSR reference implementations</h1>
        <dl>
          <a href="http://weld.cdi-spec.org/"><dt>Weld</dt>
          <dd>CDI: Contexts and Dependency Injection</dd></a>
          <a href="https://jersey.java.net/"><dt>Jersey</dt>
          <dd>JAX-RS</dd></a>
        </dl>
        <h1>JavaEE 6 or 7 Certified Solutions</h1>
        <dl>
          <a href="http://glassfish.java.net"><dt>GlassFish server Open Source Edition</dt>
          <dd>Java EE 7 - full, web</dd></a>
          <a href="http://wildfly.org"><dt>WildFly</dt>
          <dd>Java EE 7 - full, web</dd></a>
          <a href="http://tomee.apache.org/"><dt>Apache TomEE</dt>
          <dd>Java EE 6 - web</dd></a>
        </dl>
      </eeio-projects-shortlist>
    );
  }

});

DocTitle = React.createClass({

  render() {
    return (
      <div >
        <h1 className="ng-scope">Java EE Documentation</h1>
        <p className="ng-scope">Duis aliquam arcu sed felis congue aliquet. Maecenas ullamcorper lacus bibendum vulputate interdum.</p>
      </div>
    );
  }

});

render.documentation = render(<MainSkeleton body=<DocBody/> title=<DocTitle/> />);
