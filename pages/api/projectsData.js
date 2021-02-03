export default (req, res) => {
  res.statusCode = 200
  res.json({
    webProjects: [
      {
        title: 'Cylinder Homologation',
        imageLogo: {
          src: '/images/cylinder-smc.png',
          width: '250px',
          height: '165px',
          alt: 'Cilindro neumático',
        },
        cardBg: 'cylinder-bg.jpg',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vel! Fuga dolorem voluptatum, possimus odit harum accusamus ex mollitia animi officia obcaecati, ullam error similique sunt amet repellendus, eius nisi.',
        techList: [
          {
            name: 'html5',
            height: '50px',
          },
          {
            name: 'css3',
            height: '50px',
          },
          {
            name: 'javascript',
            height: '50px',
          },
        ],
        siteUrl: 'https://charleydvs.github.io/Cylinder-homologation/',
        repositoryUrl: 'https://github.com/CharleyDvs/Cylinder-homologation',
      },
      {
        title: 'Html Generator',
        imageLogo: {
          src: '/images/cylinder-smc.png',
          width: '250px',
          height: '165px',
          alt: 'Cilindro neumático',
        },
        cardBg: 'cylinder-bg.jpg',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vel! Fuga dolorem voluptatum, possimus odit harum accusamus ex mollitia animi officia obcaecati, ullam error similique sunt amet repellendus, eius nisi.',
        techList: [
          {
            name: 'nextjs',
            height: '50px',
          },
          {
            name: 'react',
            height: '50px',
          },
          {
            name: 'sass',
            height: '50px',
          },
        ],
        siteUrl: '/#',
        repositoryUrl: '/#',
      },
      {
        title: 'Project 3',
        imageLogo: {
          src: '/images/cylinder-smc.png',
          width: '250px',
          height: '165px',
          alt: 'Cilindro neumático',
        },
        cardBg: 'cylinder-bg.jpg',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vel! Fuga dolorem voluptatum, possimus odit harum accusamus ex mollitia animi officia obcaecati, ullam error similique sunt amet repellendus, eius nisi.',
        techList: [
          {
            name: 'html5',
            height: '50px',
          },
          {
            name: 'css3',
            height: '50px',
          },
          {
            name: 'javascript',
            height: '50px',
          },
        ],
        siteUrl: '/#',
        repositoryUrl: '/#',
      },
    ],
    engineeringProjects: [
      {
        title: 'Project 1',
        imageLogo: {
          src: '/images/cylinder-smc.png',
          width: '250px',
          height: '165px',
          alt: 'Cilindro neumático',
        },
        cardBg: 'cylinder-bg.jpg',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vel! Fuga dolorem voluptatum, possimus odit harum accusamus ex mollitia animi officia obcaecati, ullam error similique sunt amet repellendus, eius nisi.',
        siteUrl: '/#',
        repositoryUrl: '/#',
      },
      {
        title: 'Project 2',
        imageLogo: {
          src: '/images/cylinder-smc.png',
          width: '250px',
          height: '165px',
          alt: 'Cilindro neumático',
        },
        cardBg: 'cylinder-bg.jpg',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vel! Fuga dolorem voluptatum, possimus odit harum accusamus ex mollitia animi officia obcaecati, ullam error similique sunt amet repellendus, eius nisi.',
        siteUrl: '/#',
        repositoryUrl: '/#',
      },
    ],
  })
}
