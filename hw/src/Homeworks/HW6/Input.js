export default function Input({ input, setInput }) {
    return (
        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            name={'grocery'}
        />
    )
}
