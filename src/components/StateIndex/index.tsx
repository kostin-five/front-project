import Style from './StateIndex.module.css';


interface Props {
    index: number;
    setIndex: (value: number) => void;
}

export default function StateIndex({index, setIndex}:Props) {


    function handleClick()
    {
        setIndex(index + 1);
    }

    return (
        <div className={Style.StateIndex}>
            <h4>{index}</h4>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}