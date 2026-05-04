'use client';

export function ExportPDFButton() {
  const handlePrint = () => {
    window.open('/export', '_blank');
  };

  return (
    <button
      onClick={handlePrint}
      className="lang-btn border border-gray-200 print:hidden"
      title="Export to PDF"
    >
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      <span>PDF</span>
    </button>
  );
}
