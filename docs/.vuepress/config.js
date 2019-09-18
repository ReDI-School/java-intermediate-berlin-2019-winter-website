module.exports = {
  title: 'Intermediate Java - Fall 2019',
  description: 'Just playing around',
  themeConfig: {
    title: 'Redi School Intermediate Java',
    sidebar: {'/lessons': [
        '/lessons/01-intro',
        '/lessons/02-git',
        '/lessons/03-string-operations',
        '/lessons/05-oop-objects-classes',
        '/lessons/preject',
        '/lessons/09-oop-recap-polymorphism'
      ],
      '/teachers': [
        '/teachers/for-teachers',
        '/teachers/how-to-edit-this-site',
        '/teachers/how-to-make-a-screencast',
        '/teachers/how-to-teach-resources'
      ]},
    sidebarDepth: 1,
    displayAllHeaders: 0,
    nav: [
      { text: "Home", link: "/" },
      { text: "Lessons", link: "/lessons/01-intro" },
      { text: "Extra Resources", link: "/resources"},
      { text: "For Teachers", link: "/teachers/for-teachers"}
    ],
    lastUpdated: 'Last Updated'
  }
}
