import { combineReducers } from "redux";

import { mainReducers } from "./HomePage/MainReducers";
import { detailsReducer } from "./HomePage/DetailsReducers";
import { premiumReducers } from "./HomePage/PremiumReducers";
import { footerReducer } from "./Footer/FooterReducers";
import { mergeReducer } from "./Pages/MergeReducer";
import { splitReducer } from "./Pages/SplitReducer";
import { compressReducer } from "./Pages/CompressReducer";
import { JPGtoPDFReducer } from "./Pages/JPGToPDFReducer";
import { WORDtoPDFReducer } from "./Pages/WORDToPDFReducer";
import { POWERtoPDFReducer } from "./Pages/PowerPointToPDFReducer";
import { EXCELtoPDFReducer } from "./Pages/EXCELToPDFReducer";
import { PDFtoJPGReducer } from "./Pages/PDFToJPGReducer";
import { PDFtoWORDReducer } from "./Pages/PDFToWORDReducer";
import { PDFtoPOWERReducer } from "./Pages/PDFToPowerPointReducer";
import { PDFtoEXCELReducer } from "./Pages/PDFToEXCELReducer";
import { PDFtoPDFaReducer } from "./Pages/PDFToPDFaReducer";
import { removePageReducer } from "./Pages/RemovePDFPageReducer";
import { organizeReducer } from "./Pages/OrganizePDFReducer";
import { repairReducer } from "./Pages/RepairPDFReducer";
import { ocrReducer } from "./Pages/OcrPDFReducer";
import { rotateReducer } from "./Pages/RotatePDFReducer";
import { addPgNumReducer } from "./Pages/AddPageNumberReducer";
import { addWatermarkReducer } from "./Pages/AddWaterMarkReducer";
import { editReducer } from "./Pages/EditPDFReducer";
import { unlockReducer } from "./Pages/UnlockPDFReducer";
import { protectReducer } from "./Pages/ProtectPDFReducer";
import { signReducer } from "./Pages/SignPDFReducer";

const rootReducer = combineReducers({
  mainReducers,
  detailsReducer,
  premiumReducers,
  footerReducer,
  mergeReducer,
  splitReducer,
  compressReducer,
  JPGtoPDFReducer,
  WORDtoPDFReducer,
  POWERtoPDFReducer,
  EXCELtoPDFReducer,
  PDFtoJPGReducer,
  PDFtoWORDReducer,
  PDFtoPOWERReducer,
  PDFtoEXCELReducer,
  PDFtoPDFaReducer,
  removePageReducer,
  organizeReducer,
  repairReducer,
  ocrReducer,
  rotateReducer,
  addPgNumReducer,
  addWatermarkReducer,
  editReducer,
  unlockReducer,
  protectReducer,
  signReducer,
});

export default rootReducer;
