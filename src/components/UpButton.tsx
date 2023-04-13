import {FiChevronUp} from 'react-icons/fi'


const UpButton = () => {

  const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div>
      <button className='p-4 bg-zinc-950 ' 
        onClick={() => {
          ScrollTop()
        }}
      >
        <FiChevronUp 
          color='white'
        />
      </button>
    </div>
  )
}

export default UpButton