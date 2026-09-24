interface DisplayProps {
    count: number;
}

export function Display({ count }: DisplayProps) {
    return (
        <div>
            <p>Total: { count }</p>
            {/* Conditional Rendering: */}
            {count === 0 && <p>Be the first person to like</p>}
            {count > 0 && count < 10 && <p>It's going well</p>}
            {count >= 10 && <p>YOU'RE FAMOUS!</p>}
        </div>
    )
}