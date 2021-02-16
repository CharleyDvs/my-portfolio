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
        text: `A demo app developed to make easier cylinder homologations, an engineer can take measures of a cylinder and the app compares between the original model and the selected cylinder series. It was developed to help the proccess and also to display a simplified comparison between the original cylinder and the homologation. I'm currently working in a more advanced version`,
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
          src: '/images/html-logo.png',
          width: '250px',
          height: '165px',
          alt: 'Logo html',
        },
        cardBg: 'html-gen-bg.jpg',
        text: `An app developed as a custom html code generator, it was made to generate a code from a simple interface so any user without a previous knowledge could generate a code that's being used in a Shopify project`,
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
        siteUrl: 'https://html-generator.vercel.app/',
        repositoryUrl: 'https://github.com/CharleyDvs/HtmlGenerator',
      },
      {
        title: 'This site',
        imageLogo: {
          src: '/images/hawk-mini.png',
          width: '250px',
          height: '165px',
          alt: 'Halcón volando',
        },
        cardBg: 'portfolio-bg.jpg',
        text:
          'This site was made to familiarize with Next.js and Framer motion library, it was developed to show some of my skills and I planned to actualize it as I keep learning more technologies ',
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
        siteUrl: 'https://epicforge.dev/',
        repositoryUrl: 'https://github.com/CharleyDvs/my-portfolio',
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
