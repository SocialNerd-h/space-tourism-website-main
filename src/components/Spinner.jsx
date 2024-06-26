import { MoonLoader } from "react-spinners"

const Spinner = ({loading}) => {
  return (
    <MoonLoader 
    color='#D0D6F9'
    loading={loading}
    size={100}
    />
  )
}

export default Spinner