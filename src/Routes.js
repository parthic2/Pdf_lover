import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
const RootLayout = lazy(() => import("./Components/Layout/RootLayout"));
const Index = lazy(() => import("./Components/Main/Index"));
const DownloadMerge = lazy(() => import("./DownloadPages/DownloadMerge"));
const MergePDF = lazy(() => import("./Pages/MergePDF/MergePDF"));
const SplitPDF = lazy(() => import("./Pages/SplitPDF/SplitPDF"));
const CompressPDF = lazy(() => import("./Pages/CompressPDF/CompressPDF"));
const ProtectPDF = lazy(() => import("./Pages/AllPDFList/Protect/ProtectPDF"));
const RepairPDF = lazy(() => import("./Pages/AllPDFList/Repair/RepairPDF"));
const RotatePDF = lazy(() => import("./Pages/AllPDFList/Rotate/RotatePDF"));
const UnlockPDF = lazy(() => import("./Pages/AllPDFList/Unlock/UnlockPDF"));
const EXCELToPDF = lazy(() => import("./Pages/ConvertPDFList/EXCELtoPDF/EXCELToPDF"));
const JPGToPDF = lazy(() => import("./Pages/ConvertPDFList/JPGtoPDF/JPGToPDF"));
const PDFToJPG = lazy(() => import("./Pages/ConvertPDFList/PDFtoJPG/PDFToJPG"));
const AddWaterMark = lazy(() => import("./Pages/AllPDFList/Watermark/AddWaterMark"));

export const Router = createBrowserRouter([
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
        path: "/excel_to_pdf",
        element: <EXCELToPDF />,
    },
    {
        path: "/pdf_to_jpg",
        element: <PDFToJPG />,
    },
    {
        path: "/Repair_PDF",
        element: <RepairPDF />,
    },
    {
        path: "/Rotate_PDF",
        element: <RotatePDF />,
    },
    {
        path: "/Add_watermark",
        element: <AddWaterMark />,
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
        path: "/Download_PDF",
        element: <DownloadMerge />,
    }
]);