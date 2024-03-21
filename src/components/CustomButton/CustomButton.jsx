import "./CustomButton.css";

export default function CustomButton({ text, onClick }) {
    return (
        <button onClick={onClick} className="CustomButton">
            {text}
        </button>
    );
}
