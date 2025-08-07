// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications are available upon request.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-tian-successfully-defended-her-phd-viva",
          title: 'Tian successfully defended her PhD viva.',
          description: "",
          section: "News",},{id: "news-tian-began-her-role-as-a-postdoctoral-research-associate-on-the-cotide-project",
          title: 'Tian began her role as a Postdoctoral Research Associate on the CoTide project....',
          description: "",
          section: "News",},{id: "news-tian-s-recent-paper-on-10-year-wave-current-coupled-modelling-has-been-available-online-in-applied-ocean-research",
          title: 'Tian’s recent paper on 10-year wave-current coupled modelling has been available online in...',
          description: "",
          section: "News",},{id: "projects-badminton",
          title: 'Badminton',
          description: "我从小玩到大[doge]",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-hiking",
          title: 'Hiking',
          description: "虽然但是，我是平底足",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-photograph",
          title: 'Photograph',
          description: "审美有待提高",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-cycling",
          title: 'Cycling',
          description: "外卖骑手的退休生活",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-video",
          title: 'Video',
          description: "常年断更的B站up",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-carving",
          title: 'Carving',
          description: "除了颈椎不高兴，都挺高兴的",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
