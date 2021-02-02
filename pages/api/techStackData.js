export default (req, res) => {
  res.statusCode = 200
  res.json({
    firstRow: [
      {
        name: 'html5',
        height: '150px',
      },
      {
        name: 'css3',
        height: '150px',
      },
      {
        name: 'javascript',
        height: '150px',
      },
      {
        name: 'github',
        height: '150px',
      },
    ],
    secondRow: [
      {
        name: 'react',
        height: '150px',
      },
      {
        name: 'redux',
        height: '150px',
      },
      {
        name: 'gsap',
        height: '150px',
      },
      {
        name: 'nextjs',
        height: '150px',
      },
    ],
    thirdRow: [
      {
        name: 'nodejs',
        height: '150px',
      },
      {
        name: 'mongodb',
        height: '150px',
      },
      {
        name: 'firebase',
        height: '150px',
      },
    ],
  })
}
