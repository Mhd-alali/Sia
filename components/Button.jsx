export default function Button({ children,className }) {
    return <>
        <button className={`bg-primary text-1xl py-2 px-8 rounded-2xl ${className}`}>{children}</button>
    </>
}