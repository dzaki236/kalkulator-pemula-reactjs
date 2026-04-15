import { useState } from "react";

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

    const removeInput = (index) => {
        const newInputs = inputs.filter((_, i) => i !== index);
        setInputs(newInputs);
        setShowResult(false);
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
