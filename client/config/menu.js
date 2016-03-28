(function() {
var javaEEMenu = [
    {
      label: "Learn",  // javaee7-samples and javaee.support page, https://javaee7.zeef.com/arjan.tijms
      href:  "learn"
    },
    {
      label: "Documentation",  // official docs: JCP process and summary of Java EE 7 JSRs, List of certified app servers and servers with some support, links to documentation of RIs
      href:  "documentation"
    },
    {
      label: "Download",  // Java EE SDK, Glassfish, links to certified servers, links to other projects with downloadables (Forge)
      href:  "."
    },
    {
      label: "Tools", // ecosystem like Forge, IDE support, Maven plugins, Projects like Deltaspike, Arquillian, Omnifaces, Primefaces, SnoopEE, KumuluzEE, ...
      href:  "."
    },
    {
      label: "Community",  // JCP, mailing lists (the Guardians mailing list)..., podcasts (vJUG, Enterprise Java Newscast), events, blogs/articles, video presentations, conferences, java magazine, slack, stackoverflow questions...
      href:  "."
    },
    {
      label: "Java EE 8",  // pointers to latest efforts with Java EE 8 (Glassfish 5 and JSRs in development, the Guardians mailing list, https://javaee8.zeef.com/arjan.tijms)
      href:  "."
    }
  ];

config.menu = {
  items : javaEEMenu.slice().concat([
    {
      label: "About",
      href:  "."  // contributors, mission statement, Java EE general materials
    }
  ])
};

config.footer = {
  navigation: {
    items : [
      {
        header: "Java EE",
        subItems: javaEEMenu
      },
      {
        header: "About",
        subItems: [
          {
            label: "JavaEE.io", // mission statement
            href: "."
          },
          {
            label: "Contributors",
            href: "contributors"
          },
          {
            label: "Java Community Process",
            href: "https://jcp.org"
          }
        ]
      },
      {
        header: "Follow",
        subItems: [
          {
            label: "JavaEE spec mailing list",
            href: "."
          },
          {
            label: "JavaEE Guardians mailing list",
            href: "."
          },
          {
            label: "JavaEE Guardians on Twitter",
            href: "."
          },
          {
            label: "JavaEE specs on Github",
            href: "https://github.com/javaee-spec"
          }
        ]
      },
      {
        header: "Contribute",
        subItems: [
          {
            label: "JavaEE.support",
            href: "http://javaee.support/contribute/"
          }
        ]
      }
    ]
  }
}

})();
