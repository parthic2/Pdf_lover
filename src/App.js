import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

const RootLayout = lazy(() => import("./Components/Layout/RootLayout"));
const Index = lazy(() => import("./Components/Main/Index"));
// const DownloadMerge = lazy(() => import("./DownloadPages/DownloadMerge"));
const MergePDF = lazy(() => import("./Pages/MergePDF/MergePDF"));
// const SplitPDF = lazy(() => import("./Pages/SplitPDF/SplitPDF"));
// const CompressPDF = lazy(() => import("./Pages/CompressPDF/CompressPDF"));
// const ProtectPDF = lazy(() => import("./Pages/AllPDFList/ProtectPDF"));
// const RepairPDF = lazy(() => import("./Pages/AllPDFList/RepairPDF"));
// const RotatePDF = lazy(() => import("./Pages/AllPDFList/RotatePDF"));
// const UnlockPDF = lazy(() => import("./Pages/AllPDFList/UnlockPDF"));
// const EXCELToPDF = lazy(() => import("./Pages/ConvertPDFList/EXCELToPDF"));
// const JPGToPDF = lazy(() => import("./Pages/ConvertPDFList/JPGToPDF"));
// const PDFToJPG = lazy(() => import("./Pages/ConvertPDFList/PDFToJPG"));
// const AddWaterMark = lazy(() => import("./Pages/AllPDFList/AddWaterMark"));

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <Index /> }],
  },
  {
    path: "/Merge_PDF",
    element: <MergePDF />,
  }
  // {
  //   path: "/Split_PDF",
  //   element: <SplitPDF />,
  // },
  // {
  //   path: "/Compress_PDF",
  //   element: <CompressPDF />,
  // },
  // {
  //   path: "/jpg_to_pdf",
  //   element: <JPGToPDF />,
  // },
  // {
  //   path: "/excel_to_pdf",
  //   element: <EXCELToPDF />,
  // },
  // {
  //   path: "/pdf_to_jpg",
  //   element: <PDFToJPG />,
  // },
  // {
  //   path: "/Repair_PDF",
  //   element: <RepairPDF />,
  // },
  // {
  //   path: "/Rotate_PDF",
  //   element: <RotatePDF />,
  // },
  // {
  //   path: "/Add_watermark",
  //   element: <AddWaterMark />,
  // },
  // {
  //   path: "/Unlock_PDF",
  //   element: <UnlockPDF />,
  // },
  // {
  //   path: "/Protect_PDF",
  //   element: <ProtectPDF />,
  // },
  // {
  //   path: "/Download_Merge_PDF",
  //   element: <DownloadMerge />,
  // }
]);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={Router} />
    </Suspense>
  )
}

export default App;
