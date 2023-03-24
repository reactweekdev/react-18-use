type Props = {
    children: React.ReactNode
}

const Title = (props: Props) => {
    return <h2>{props.children}</h2>
}

export default Title
