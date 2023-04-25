import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const RootLayout = lazy(() => import("./Components/Layout/RootLayout"));
const Index = lazy(() => import("./Components/Main/Index"));
const DownloadMerge = lazy(() => (() => "./DownloadPages/DownloadMerge"));
const Login = lazy(() => import("./Form/Login/Login"));
const ResetPassword = lazy(() => import("./Form/ResetPassword/ResetPassword"));
const Register = lazy(() => import("./Form/SignUp/Register"));
const AddPageNumber = lazy(() => import("./Pages/AllPDFList/AddPageNumber"));
const AddWaterMark = lazy(() => import("./Pages/AllPDFList/AddWaterMark"));
const EditPDF = lazy(() => import("./Pages/AllPDFList/EditPDF"));
const OcrPDF = lazy(() => import("./Pages/AllPDFList/OcrPDF"));
const OrganizePDF = lazy(() => import("./Pages/AllPDFList/OrganizePDF"));
const ProtectPDF = lazy(() => import("./Pages/AllPDFList/ProtectPDF"));
const RemovePDFPage = lazy(() => import("./Pages/AllPDFList/RemovePDFPage"));
const RepairPDF = lazy(() => import("./Pages/AllPDFList/RepairPDF"));
const RotatePDF = lazy(() => import("./Pages/AllPDFList/RotatePDF"));
const SignPDF = lazy(() => import("./Pages/AllPDFList/SignPDF"));
const UnlockPDF = lazy(() => import("./Pages/AllPDFList/UnlockPDF"));
const CompressPDF = lazy(() => import("./Pages/CompressPDF/CompressPDF"));
const EXCELToPDF = lazy(() => import("./Pages/ConvertPDFList/EXCELToPDF"));
const JPGToPDF = lazy(() => import("./Pages/ConvertPDFList/JPGToPDF"));
const PDFToEXCEL = lazy(() => import("./Pages/ConvertPDFList/PDFToEXCEL"));
const PDFToJPG = lazy(() => import("./Pages/ConvertPDFList/PDFToJPG"));
const PDFToPDFa = lazy(() => import("./Pages/ConvertPDFList/PDFToPDFa"));
const PDFToPowerPoint = lazy(() => import("./Pages/ConvertPDFList/PDFToPowerPoint"));
const PDFToWORD = lazy(() => import("./Pages/ConvertPDFList/PDFToWORD"));
const PowerPointToPDF = lazy(() => import("./Pages/ConvertPDFList/PowerPointToPDF"));
const WORDToPDF = lazy(() => import("./Pages/ConvertPDFList/WORDToPDF"));
const MergePDF = lazy(() => import("./Pages/MergePDF/MergePDF"));
const SplitPDF = lazy(() => import("./Pages/SplitPDF/SplitPDF"));
const FAQ = lazy(() => import("./DetailsPages/Help/FAQ/FAQ"));
const Tools = lazy(() => import("./DetailsPages/Help/Tools/Tools"));
const LegalPrivacy = lazy(() => import("./DetailsPages/Help/Legal&Privacy/LegalPrivacy"));
const Pricing = lazy(() => import("./DetailsPages/Pricing/Pricing"));

const Router = createBrowserRouter([
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/ForgotPassword",
    element: <ResetPassword />,
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <Index /> }],
  },
  {
    path: "/Merge_PDF",
    element: <MergePDF />,
  },
  {
    path: "/Split_PDF",
    element: <SplitPDF />,
  },
  {
    path: "/Compress_PDF",
    element: <CompressPDF />,
  },
  {
    path: "/jpg_to_pdf",
    element: <JPGToPDF />,
  },
  {
    path: "/word_to_pdf",
    element: <WORDToPDF />,
  },
  {
    path: "/powerpoint_to_pdf",
    element: <PowerPointToPDF />,
  },
  {
    path: "/excel_to_pdf",
    element: <EXCELToPDF />,
  },
  {
    path: "/pdf_to_jpg",
    element: <PDFToJPG />,
  },
  {
    path: "/pdf_to_word",
    element: <PDFToWORD />,
  },
  {
    path: "/pdf_to_powerpoint",
    element: <PDFToPowerPoint />,
  },
  {
    path: "/pdf_to_excel",
    element: <PDFToEXCEL />,
  },
  {
    path: "/pdf_to_pdf/a",
    element: <PDFToPDFa />,
  },
  {
    path: "/Remove_pages",
    element: <RemovePDFPage />,
  },
  {
    path: "/Organize_PDF",
    element: <OrganizePDF />,
  },
  {
    path: "/Repair_PDF",
    element: <RepairPDF />,
  },
  {
    path: "/OCR_PDF",
    element: <OcrPDF />,
  },
  {
    path: "/Rotate_PDF",
    element: <RotatePDF />,
  },
  {
    path: "/Add_page_numbers",
    element: <AddPageNumber />,
  },
  {
    path: "/Add_watermark",
    element: <AddWaterMark />,
  },
  {
    path: "/Edit_PDF",
    element: <EditPDF />,
  },
  {
    path: "/Unlock_PDF",
    element: <UnlockPDF />,
  },
  {
    path: "/Protect_PDF",
    element: <ProtectPDF />,
  },
  {
    path: "/Sign_PDF",
    element: <SignPDF />,
  },
  {
    path: "/Download_Merge_PDF",
    element: <DownloadMerge />,
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/FAQ", element: <FAQ /> },
      { path: "/Tools", element: <Tools /> },
      { path: "/Legal", element: <LegalPrivacy /> },
      { path: "/Pricing", element: <Pricing /> }
    ],
  }
]);

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={Router} />
      </Suspense>
    </>
  )
}

export default App;
