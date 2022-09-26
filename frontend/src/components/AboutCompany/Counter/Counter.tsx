import React, { FunctionComponent, memo, useEffect, useState } from 'react';
import {
  SumTitle,
} from '../AboutCompany.styles';
import { ICounter } from './Counter.interfaces';

export const Counter: FunctionComponent<ICounter> = ({end, index, showDesc}) => {
  const [isShowDescription, setShowDescription] = useState(false);

  useEffect(() => {
    if (showDesc && isShowDescription) {
      showDesc(isShowDescription);
    }
  }, [showDesc, isShowDescription])

  const CounterValue = () => {
    const [currVal, setCurrVal] = useState(0);
    const step = end / 42;
    useEffect(() => {
      currVal !== end && setTimeout(setCurrVal, 90, currVal + step);
      if (currVal > end) setCurrVal(end);
      if (currVal === end) setShowDescription(true);
    }, [currVal]);
    if (index === 1 && currVal === 108) return `${Math.ceil(currVal)} тыс. м³`;
    if (index === 3 && currVal === 400) return `${currVal}+`
    return Math.ceil(currVal);
  }

  return (
    <SumTitle>{CounterValue()}</SumTitle>
  )
};

export default memo(Counter);
