import { combineReducers } from "redux";

import { mainReducers } from "./HomePage/MainReducers";
import { detailsReducer } from "./HomePage/DetailsReducers";
import { SolutionSliderReducer } from "./HomePage/SolutionSectionReducers";
import { trustedReducers } from "./HomePage/TrustedReducers";
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
import { faqReducer } from './DetailsPages/FAQReducer';
import { organizeToolsReducer } from './DetailsPages/OrganizeToolReducer';
import { optimizeToolsReducer } from './DetailsPages/OptimizeToolReducer';
import { editToolsReducer } from './DetailsPages/EditToolReducer';
import { CtoPToolsReducer } from './DetailsPages/CtoPToolReducer';
import { CFromPToolsReducer } from './DetailsPages/CFromPToolReducer';
import { securityToolsReducer } from './DetailsPages/SecurityToolReducer';
import { techToolsReducer } from './DetailsPages/TechToolReducer';
import { legalReducer } from './DetailsPages/LegalReducer';
import { toolsTopicReducer } from './DetailsPages/ToolsTopicReducer';
import { pricingReducer } from './DetailsPages/Pricing/PricingReducer';
import { freeDataReducer } from './DetailsPages/Pricing/FreeCardReducer';
import { businessDataReducer } from './DetailsPages/Pricing/BusinessCardReducer';
import { premiumDataReducer } from './DetailsPages/Pricing/PremiumCardReducer';

const rootReducer = combineReducers({
  mainReducers,
  detailsReducer,
  SolutionSliderReducer,
  trustedReducers,
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
  faqReducer,
  organizeToolsReducer,
  optimizeToolsReducer,
  editToolsReducer,
  CtoPToolsReducer,
  CFromPToolsReducer,
  securityToolsReducer,
  techToolsReducer,
  legalReducer,
  toolsTopicReducer,
  pricingReducer,
  freeDataReducer,
  businessDataReducer,
  premiumDataReducer
});

export default rootReducer;
