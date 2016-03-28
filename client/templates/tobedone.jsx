TobedoneTitle = React.createClass({

  render() {
    return (
      <div >
        <h1 className="ng-scope">To be done...</h1>
        <p className="ng-scope">Duis aliquam arcu sed felis congue aliquet. Maecenas ullamcorper lacus bibendum vulputate interdum.</p>
      </div>
    );
  }

});

render.tobedone = render(<MainSkeleton title=<TobedoneTitle/> />);
