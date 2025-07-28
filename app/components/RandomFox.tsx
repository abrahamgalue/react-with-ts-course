const random = () => Math.floor(Math.random() * 123) + 1

const RandomFox = () => {
  const image = `http://randomfox.ca/images/${random()}.jpg`

  return (
    <picture>
      <img
        alt='random fox image'
        className='rounded'
        height='auto'
        src={image}
        width={320}
      />
    </picture>
  )
}

// const RandomFox = (): JSX.Element => {
//   return <img />
// }

// const RandomFox: FunctionComponent = () => {
//   return <img />
// }

// const RandomFox: FC = () => {
//   return <img />
// }

export default RandomFox
