export default function Modal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-10 shadow-xl relative w-[500px] flex flex-col items-center gap-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer text-xl p-0.5 text-black bg-[#6b6b6b] rounded-2xl"
        >
          <i className="fa-solid fa-x" />
        </button>

        {/* Tick circle */}
        <div className="w-32 h-32 rounded-full bg-[#e1e5ff] flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-[#66e28a] flex items-center justify-center">
            <i className="fa fa-check text-white text-4xl"></i>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-black">Form Submitted</h2>
      </div>
    </div>
  );
}
