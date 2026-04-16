export default function InputField({
    value,
    index,
    totalInputs,
    onChange,
    onRemove
}) {
    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend">
                Angka {index + 1}
            </legend>

            <div className="flex gap-2">
                <input
                    type="number"
                    required
                    value={value}
                    // min={0}
                    className="input w-full"
                    placeholder={`Masukkan angka ${index + 1}`}
                    onChange={(e) => onChange(index, e.target.value)}
                />

                {totalInputs > 2 && (
                    <div className="tooltip" data-tip="Hapus Angka Ini">
                        <button
                            type="button"
                            className="btn btn-error"
                            onClick={() => onRemove(index)}
                        >
                            ✕
                        </button>
                    </div>
                )}
            </div>
        </fieldset>
    );
}
