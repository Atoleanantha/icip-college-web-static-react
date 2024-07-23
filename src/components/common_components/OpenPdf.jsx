import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set the worker URL for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const OpenPdf = () => {
    const myPdf = 'C:/Users/Narendra Wakhare/Desktop/icip_react/src/pdf/Amrutvahini ICIP Brochure.pdf'; // Your PDF path

  return (
    <div>
      <Document file={myPdf}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default OpenPdf;
