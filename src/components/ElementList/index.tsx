import Style from '../StateIndex/StateIndex.module.css';
import className from 'className;'

interface Props {
    name: string;
    isPacked: boolean;
}

export default function ElementList({name, isPacked}:Props) {
    let nameElement = name;
    if (isPacked)
    {
        nameElement = name + " ✅";
    }

    return <li>{nameElement}</li>
}