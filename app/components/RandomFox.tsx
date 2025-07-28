type Props = {
  image: string
}

const RandomFox = ({ image }: Props) => {
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
