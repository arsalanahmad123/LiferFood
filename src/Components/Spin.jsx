import { InfinitySpin } from 'react-loader-spinner'

const Spin = () => {
    return (
        <InfinitySpin
            visible={true}
            width='200'
            color='#F58201'
            ariaLabel='infinity-spin-loading'
        />
    )
}

export default Spin
