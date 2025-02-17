interface Props {
    age: number;
}


export default function MyName ({ age} : Props) {
    return <h1>Hello { age }!</h1>
}