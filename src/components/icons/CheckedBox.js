import React from 'react'
import tickBoxSvg from '../../external-icons/tickBoxSvg.svg'
import './CheckedBox.scss'

const CheckedBox = () => {
    return (
        <div className="square">
            <img src={tickBoxSvg} alt="tickbox" />
        </div>
    )
}

export default CheckedBox
