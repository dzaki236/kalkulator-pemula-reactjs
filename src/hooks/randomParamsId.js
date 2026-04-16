export default function paramsId(operator) {
    switch (operator) {
        case "+":
            return (Math.random() + 2).toString(36).substring(1);
        case "-":
            return (Math.random() + 2).toString(36).substring(1);
        case "x":
            return (Math.random() + 2).toString(36).substring(1);
        case "÷":
            return (Math.random() + 2).toString(36).substring(1);
        default:
            return (Math.random() + 2).toString(36).substring(1);
    }
};
