import { useState } from "react";
import { Button } from "./components/ui/button";

const steps = ["Zastosowanie", "Procesor", "Karta graficzna", "Pamięć RAM", "Podsumowanie"];

const options = {
  Zastosowanie: ["Do grania", "Do pracy", "Do nauki"],
  Procesor: {
    "Do grania": ["Intel i5", "AMD Ryzen 5"],
    "Do pracy": ["Intel i7", "AMD Ryzen 7"],
    "Do nauki": ["Intel i3", "AMD Ryzen 3"]
  },
  "Karta graficzna": {
    "Intel i3": ["Zintegrowana"],
    "AMD Ryzen 3": ["Zintegrowana"],
    "Intel i5": ["NVIDIA RTX 3060", "AMD RX 6600"],
    "AMD Ryzen 5": ["NVIDIA RTX 3060", "AMD RX 6600"],
    "Intel i7": ["NVIDIA RTX 4070", "AMD RX 7800"],
    "AMD Ryzen 7": ["NVIDIA RTX 4070", "AMD RX 7800"]
  },
  "Pamięć RAM": ["16 GB", "32 GB", "64 GB"]
};

export default function PCConfigurator() {
  const [step, setStep] = useState(0);
  const [selection, setSelection] = useState({});

  const currentStep = steps[step];

  const getChoices = () => {
    if (currentStep === "Procesor") return options[currentStep][selection["Zastosowanie"]] || [];
    if (currentStep === "Karta graficzna") return options[currentStep][selection["Procesor"]] || [];
    return options[currentStep] || [];
  };

  const handleSelect = (choice) => {
    setSelection((prev) => ({ ...prev, [currentStep]: choice }));
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  if (currentStep === "Podsumowanie") {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Podsumowanie konfiguracji</h2>
        <ul className="mb-4">
          {steps.slice(0, -1).map((s) => (
            <li key={s} className="mb-1">
              <strong>{s}:</strong> {selection[s] || "Nie wybrano"}
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <Button variant="outline" onClick={handleBack}>Wstecz</Button>
          <Button onClick={() => {
            setStep(0);
            setSelection({});
          }}>
            Rozpocznij od nowa
          </Button>
        </div>
      </div>
    );
  }

  const choices = getChoices();
  const isDisabled = choices.length === 0;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Krok {step + 1}: {currentStep}</h2>
      {isDisabled ? (
        <p className="text-red-600">Brak dostępnych opcji – upewnij się, że wybrano poprzedni krok.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {choices.map((choice) => (
            <Button key={choice} onClick={() => handleSelect(choice)}>{choice}</Button>
          ))}
        </div>
      )}
      <div className="flex justify-between">
        <Button variant="outline" onClick={handleBack} disabled={step === 0}>Wstecz</Button>
      </div>
    </div>
  );
}