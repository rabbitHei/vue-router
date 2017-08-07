;
(function (window) {
  const template = `
 <nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Project name</a>
    </div>
    <div id="navbar" class="navbar-collapse collapse">
      <ul class="nav navbar-nav navbar-right">
        <li v-for="nav in navs"><a :href="nav.link">{{ nav.title }}</a></li>
      </ul>
      <form class="navbar-form navbar-right">
        <input type="text" class="form-control" placeholder="Search...">
      </form>
    </div>
  </div>
</nav>
`
  const Navbar = {
    template,
    data() {
      return {
        navs: [{
            link: 'a',
            title: '吃饭'
          },
          {
            link: 'a',
            title: '睡觉'
          },
          {
            link: 'a',
            title: '打豆豆'
          },
        ]
      }
    }
  }

  window.Navbar = Navbar

})(window)