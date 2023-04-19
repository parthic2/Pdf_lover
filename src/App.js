import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/Layout/RootLayout";
import Index from "./Components/Main/Index";
import DownloadMerge from "./DownloadPages/DownloadMerge";
import Login from "./Form/Login/Login";
import ResetPassword from "./Form/ResetPassword/ResetPassword";
import Register from "./Form/SignUp/Register";
import AddPageNumber from "./Pages/AllPDFList/AddPageNumber";
import AddWaterMark from "./Pages/AllPDFList/AddWaterMark";
import EditPDF from "./Pages/AllPDFList/EditPDF";
import OcrPDF from "./Pages/AllPDFList/OcrPDF";
import OrganizePDF from "./Pages/AllPDFList/OrganizePDF";
import ProtectPDF from "./Pages/AllPDFList/ProtectPDF";
import RemovePDFPage from "./Pages/AllPDFList/RemovePDFPage";
import RepairPDF from "./Pages/AllPDFList/RepairPDF";
import RotatePDF from "./Pages/AllPDFList/RotatePDF";
import SignPDF from "./Pages/AllPDFList/SignPDF";
import UnlockPDF from "./Pages/AllPDFList/UnlockPDF";
import CompressPDF from "./Pages/CompressPDF/CompressPDF";
import EXCELToPDF from "./Pages/ConvertPDFList/EXCELToPDF";
import JPGToPDF from "./Pages/ConvertPDFList/JPGToPDF";
import PDFToEXCEL from "./Pages/ConvertPDFList/PDFToEXCEL";
import PDFToJPG from "./Pages/ConvertPDFList/PDFToJPG";
import PDFToPDFa from "./Pages/ConvertPDFList/PDFToPDFa";
import PDFToPowerPoint from "./Pages/ConvertPDFList/PDFToPowerPoint";
import PDFToWORD from "./Pages/ConvertPDFList/PDFToWORD";
import PowerPointToPDF from "./Pages/ConvertPDFList/PowerPointToPDF";
import WORDToPDF from "./Pages/ConvertPDFList/WORDToPDF";
import MergePDF from "./Pages/MergePDF/MergePDF";
import SplitPDF from "./Pages/SplitPDF/SplitPDF";
import FAQ from "./DetailsPages/Help/FAQ/FAQ";
import Tools from "./DetailsPages/Help/Tools/Tools";
import LegalPrivacy from "./DetailsPages/Help/Legal&Privacy/LegalPrivacy";
import Pricing from "./DetailsPages/Pricing/Pricing";

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
  return <RouterProvider router={Router} />;
}

export default App;
