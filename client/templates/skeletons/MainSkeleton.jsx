MainSkeleton = React.createClass({

  render() {
    return (
      <div className="app-body ng-scope">
        <eeio-header className="home ng-scope ng-isolate-scope">
          <div>
            <div className="background"></div>
              <div className="head">
                <a href="."><img src="/images/logo.png"/></a>
                  <ul>
                    {config.menu.items.map(item =>
                      <li><a href={item.href}>{item.label}</a></li>
                    )}
                </ul>
              </div>
              <div className="title">
                {this.props.title}
              </div>
            </div>
          </eeio-header>
          <div className="page-body home ng-scope">
            {this.props.body}
          </div>
          <eeio-footer className="ng-scope ng-isolate-scope">
            <div>
              <a href="."><img src="/images/logo.png"/></a>
              <ul>
                {config.footer.navigation.items.map(item =>
                  <li>
                    <h1>{item.header}</h1>
                    <ul>
                      {item.subItems.map(subItem =>
                        <li><a href={subItem.href}>{subItem.label}</a></li>
                      )}
                    </ul>
                  </li>
                )}
              </ul>
            </div>
          </eeio-footer>
        </div>
    );
  }

});
