export default function Display({
    inputs,
    result,
    show,
    operatorSymbol,
    terbilangFn
}) {
    if (!show) return null;
    const expression = inputs.join(` ${operatorSymbol} `);
    const resultText = terbilangFn(result);
    return (
        <>
            <div className="alert alert-success alert-soft">
                <h1 className="text-lg font-bold">
                    {expression} ={" "}
                    <span className="text-xl text-green-600">
                        {result}
                    </span>
                </h1>
            </div>
            <p className="text-green-600 font-bold">
                ({resultText})
            </p>
        </>
    );
}
