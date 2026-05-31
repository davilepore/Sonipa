"use client";

import { useState } from "react";

const PIX_KEY = "03.914.411/0001-80";

const donationItems = [
  { icon: "🗞️", label: "Jornal" },
  { icon: "🧹", label: "Pano de chão" },
  { icon: "🐕", label: "Ração para cães" },
  { icon: "🐈", label: "Ração para gatos" },
  { icon: "🛏️", label: "Cobertores" },
  { icon: "🥫", label: "Sachês para gatos" },
];

export function DonationSection() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(PIX_KEY);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="doacao" className="w-full py-20 px-4">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
            <HeartIcon className="w-5 h-5 text-emerald-700" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 leading-tight">
              Faça uma doação
            </h2>
            <p className="text-sm text-gray-500">
              Cada contribuição faz a diferença
            </p>
          </div>
        </div>

        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
          Chave PIX — CNPJ
        </p>
        <div className="flex items-center justify-between gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
          <code className="text-sm font-mono font-medium text-gray-800 select-all">
            {PIX_KEY}
          </code>
          <button
            onClick={handleCopy}
            className={`
              flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border transition-all duration-150 shrink-0
              ${
                copied
                  ? "bg-emerald-50 border-emerald-300 text-emerald-700"
                  : "bg-white border-gray-200 text-gray-600 hover:bg-gray-100"
              }
            `}
          >
            {copied ? (
              <>
                <CheckIcon className="w-3.5 h-3.5" />
                Copiado!
              </>
            ) : (
              <>
                <CopyIcon className="w-3.5 h-3.5" />
                Copiar
              </>
            )}
          </button>
        </div>

        <hr className="my-6 border-gray-100" />

        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
          Endereço para entrega
        </p>
        <div className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
          <MapPinIcon className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
          <p className="text-sm text-gray-500 leading-relaxed">
            Em breve confirmaremos o melhor local para receber as doações
            físicas.
          </p>
        </div>

        <hr className="my-6 border-gray-100" />

        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
          Itens mais necessários
        </p>
        <div className="grid grid-cols-3 gap-2.5">
          {donationItems.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-2 bg-white border border-gray-100 rounded-xl py-4 px-2 text-center"
            >
              <span className="text-2xl" role="img" aria-label={item.label}>
                {item.icon}
              </span>
              <span className="text-xs text-gray-600 leading-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
      />
    </svg>
  );
}

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.2}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
      />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}
