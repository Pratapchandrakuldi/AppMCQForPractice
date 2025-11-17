
export default function Question({ text, number, total }) {
  return (
    <div className="mb-5 text-center">
      <h2 className="text-2xl font-bold text-gray-800 drop-shadow">
        Q:- {number} / {total}
      </h2>
      <p className="mt-2 text-2xl font-bold  text-gray-700">{text}</p>
    </div>
  );
}

