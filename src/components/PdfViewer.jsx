import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PdfViewer({ pdfUrl }) {
  const [pageNumber, setPageNumber] = useState(1);
  const isLastPage = pageNumber === 23; // Asume que la última página es la 23
  const isFirstPage = pageNumber === 1;

  const handlePageChange = (newPageNumber) => {
    // Asegúrate de que el nuevo número de página esté en un rango válido (1 a 23)
    if (newPageNumber >= 1 && newPageNumber <= 23) {
      setPageNumber(newPageNumber);
    }
  };

  return (
    <div className="pdf-card-container rounded-lg my-10 border border-violetin shadow-md">
      <Document
        file={pdfUrl}
        options={{
          workerSrc: `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`,
        }}
        
      >
        {isLastPage ? (
          <Page
            pageNumber={pageNumber}
            renderMode="canvas"
            scale={0.6}
            className="w-full rounded-lg border border-gray-300"
          />
        ) : (
          <div className="md:flex md:space-x-4 ">
            <Page
              pageNumber={pageNumber}
              renderMode="canvas"
              scale={0.6}
              className="w-full md:w-1/2 border"
            />
            <Page
              pageNumber={pageNumber + 1}
              renderMode="canvas"
              scale={0.6} 
              className="w-full md:w-1/2 border"
            />
          </div>
        )}
      </Document>
      {/* Paginador */}
      <div className="text-4xl text-center" id="gothicFont">
        {!isFirstPage && (
          <button
            disabled={pageNumber <= 1}
            onClick={() => handlePageChange(pageNumber - 2)} // Retrocede dos páginas
            className="mr-2 text-black px-4 py-2 rounded"
          >
            anterior
          </button>
        )}
        {isLastPage ? (
          <span className="mx-2 text-lg">página {pageNumber}</span>
        ) : (
          <span className="mx-2 text-lg">
            {/*             páginas {pageNumber} y {pageNumber + 1}
             */}{" "}
          </span>
        )}
        {!isLastPage && (
          <button
            onClick={() => handlePageChange(pageNumber + 2)} // Avanza dos páginas
            className="ml-2 text-black px-4 py-2 rounded"
          >
            siguiente
          </button>
        )}
      </div>
    </div>
  );
}

export default PdfViewer;
