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
          alt: 'Pneumatic Cylinder',
        },
        cardBg: 'cylinder-bg.jpg',
        text: `A demo app developed to make easier cylinder homologations, an engineer can take measures of a cylinder and the app compares between the original model and the selected cylinder series. It was developed to help the proccess and also to display a simplified comparison between the original cylinder and the homologation. I'm currently working in a more advanced version.`,
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
          alt: 'Html logo',
        },
        cardBg: 'html-gen-bg.jpg',
        text: `An app developed as a custom Html code generator, it was made to generate a code from a simple interface so any user without a previous knowledge could generate a code that's being used in a Shopify project`,
        techList: [
          {
            name: 'next',
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
          alt: 'Falcon flying',
        },
        cardBg: 'portfolio-bg.jpg',
        text:
          'I made this site to familiarize with Next.js and the Framer motion library, it was developed to show some of my skills and I plan to actualize it as I keep learning more technologies.',
        techList: [
          {
            name: 'next',
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
        title: 'Motor alternate start',
        imageLogo: {
          src: '/images/cylinder-smc.png',
          width: '250px',
          height: '165px',
          alt: 'Cilindro neumático',
        },
        cardBg: 'cylinder-bg.jpg',
        text:
          'This design was developed to be used with a set of three compressors in order to share the workload. Once a pressure switch gives the signal each motor starts in an alternating manner.',
        siteUrl:
          'https://www.dropbox.com/s/yv54qswq1fdk0pw/alternate-start.pdf?dl=0',
        repositoryUrl: '/#',
      },
      {
        title: 'Pneumatic cable cutter',
        imageLogo: {
          src: '/images/gripper.png',
          width: '250px',
          height: '165px',
          alt: 'Pneumatic gripper',
        },
        cardBg: 'cutter-bg.jpg',
        text:
          'An automated procces made using electropneumatic technologies. A system developed to cut cables using a gripper, a rodless actuator and a cylinder with a blade mounted.',
        siteUrl:
          'https://www.dropbox.com/s/4zelid4fjdqbbsv/pneumatic-cable-cutter.pdf?dl=0',
        repositoryUrl: '/#',
      },
    ],
  })
}
