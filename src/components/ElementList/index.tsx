import Style from '../StateIndex/stateIndex.module.css';
import classNames from 'classnames'

interface Props {
    name: string;
    isPacked: boolean;
}

export default function ElementList({name, isPacked}:Props) {
    return <li className={classNames(Style.StateIndex, !isPacked && Style.StateIndexFalse)}>{isPacked ? name + " ✅" : name}</li>
}