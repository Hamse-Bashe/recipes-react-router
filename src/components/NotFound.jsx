import { useRouteError } from 'react-router'

const NotFound = () => {

    const errors = useRouteError();

  return (
    <div className='p-6 text-center mt-12'>
        <h1 className='text-2xl font-bold text-rose-600'>{errors.statusText}</h1>
        <p>{errors.error.message}</p>
    </div>
  )
}

export default NotFound;