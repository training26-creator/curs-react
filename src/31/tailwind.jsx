// SCOP: Aplicarea claselor Tailwind conform pașilor ceruți

import { SimpleVote } from "../34/simple-vote";

export function Tailwind() {
  return (
    // 1. Container: Max-width (max-w-xl), Centrare (mx-auto), Padding (p-8)
    <div className="max-w-xl mx-auto p-8">
      
      {/* 2. Card: Background (bg-white), Rounded (rounded-xl), Shadow (shadow-lg), Margin-bottom (mb-6) */}
      {/* Am adăugat și un p-6 aici pentru ca textul să nu atingă marginile cardului */}
      <div className="bg-white rounded-xl shadow-lg mb-6 p-6 border border-gray-100">
        
        {/* 3. Header: Flex (flex), Space-between (justify-between), Center-vertical (items-center) */}
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-blue-600">Nume Utilizator</span>
          <span className="text-gray-500 text-sm">Acum 2 ore</span>
        </div>

        {/* 4. Text: Dark Gray (text-gray-700), Line Height (leading-relaxed) */}
        <p className="text-gray-700 leading-relaxed">
          Acesta este un comentariu de test. Tailwind ne ajută să stilizăm rapid
          fără să mai scriem fișiere CSS separate!
        </p>
      </div>

      <SimpleVote />
    </div>
  );
}