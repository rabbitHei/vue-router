;(function (window) {
  const template = `
<div class="col-sm-3 col-md-2 sidebar">
  <ul class="nav nav-sidebar">
    <li class="active"><a href="#/">Home <span class="sr-only">(current)</span></a></li>
    <li><a href="#/foo">Go Foo</a></li>
    <li><a href="#/bar">Go Bar</a></li>
  </ul>
</div>
`
  const Sidebar = {
    template
  }
  window.Sidebar = Sidebar
})(window)
