import { Puff } from 'react-loader-spinner'

export const Spinner = () => {
  return (
    <div className='spinner'>
      <Puff
        height="80"
        width="80"
        radisu={1}
        color="#F14"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  )
}