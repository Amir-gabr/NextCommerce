//
//
//
//
interface Amount {
  amount:number
}
import React from 'react'

const FormattedPrice = ({ amount }: Amount) => {
    const formattedAmount = new Number(amount).toLocaleString('en-us', {
        style: 'currency',
        currency: 'usd',
        maximumFractionDigits:2

    })
  return <div>{formattedAmount}</div>;
}

export default FormattedPrice