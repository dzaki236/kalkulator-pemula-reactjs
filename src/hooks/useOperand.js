import { useState } from "react";
import Swal from "sweetalert2";

export default function useOperand(operationFunction) {
    const [inputs, setInputs] = useState(["", ""]);
    const [submittedInputs, setSubmittedInputs] = useState([]);
    const [result, setResult] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleChange = (index, value) => {
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);
        setShowResult(false);
    };

    const addInput = () => {
        setInputs([...inputs, ""]);
        setShowResult(false);
    };

    const removeInput = async (index) => {
        const confirm = await Swal.fire({
            title: "Hapus angka ini?",
            text: "Angka yang dihapus tidak bisa dikembalikan!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Ya, hapus!",
            cancelButtonText: "Batal",
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6"
        });

        if (confirm.isConfirmed) {
            const newInputs = inputs.filter((_, i) => i !== index);
            setInputs(newInputs);
            setShowResult(false);

            Swal.fire({
                title: "Terhapus!",
                text: "Angka berhasil dihapus.",
                icon: "success",
                timer: 500,
                showConfirmButton: false
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const numbers = inputs.map(val => parseFloat(val) || 0);
        const resultValue = operationFunction(numbers);
        setResult(resultValue);
        setSubmittedInputs([...inputs]);
        setShowResult(true);
    };

    return {
        inputs,
        result,
        showResult,
        submittedInputs,
        handleChange,
        addInput,
        removeInput,
        handleSubmit
    };
}
