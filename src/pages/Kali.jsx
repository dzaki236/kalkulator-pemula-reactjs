import terbilang from "../hooks/terbilang";
import { Link } from "react-router";
import InputField from "../components/InputField";
import { multiply } from "../hooks/calculatorAction";
import useOperand from "../hooks/useOperand";
import Display from "../components/Display";

export default function Kali() {
    const {
        inputs,
        result,
        showResult,
        submittedInputs,
        handleChange,
        addInput,
        removeInput,
        handleSubmit
    } = useOperand(multiply);
    return (
        <div className="card bg-base-100 w-100 shadow-2xl">
            <div className="card-body">
                <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
                    <h1 className="text-2xl font-bold text-info">Perkalian ( × )</h1>
                    <div className="overflow-y-scroll max-h-72">
                        {inputs.map((value, index) => (
                            <InputField
                                key={index}
                                value={value}
                                index={index}
                                totalInputs={inputs.length}
                                onChange={handleChange}
                                onRemove={removeInput}
                                label={`Nilai ke-${index + 1}`}
                            />
                        ))}
                    </div>

                    <div className="divider">
                        <div className="tooltip" data-tip="Tambah Angka Baru">
                            <button
                                type="button"
                                className="btn"
                                onClick={addInput}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <button
                        className="btn bg-[#5EBB2B] text-white border-[#4eaa0c]"
                        type="submit"
                    >
                        Hitung
                    </button>

                    <span className="text-sm text-gray-500">
                        Jika ada kesalahan pada hasil hitung, silakan periksa kembali angka yang dimasukkan, lalu tekan tombol "Hitung" kembali.
                    </span>
                    <Display
                        inputs={submittedInputs}
                        result={result}
                        show={showResult}
                        operatorSymbol="x"
                        terbilangFn={terbilang}
                    />

                    <Link to="/" className="btn btn-link">
                        Kembali
                    </Link>
                </form>
            </div>
        </div>
    );
}
