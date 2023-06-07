import { combineReducers } from "redux";

import { mainReducers } from "./HomePage/MainReducers";
import { detailsReducer } from "./HomePage/DetailsReducers";
import { premiumReducers } from "./HomePage/PremiumReducers";
import { footerReducer } from "./Footer/FooterReducers";
import { mergeReducer } from "./Pages/MergeReducer";
import { splitReducer } from "./Pages/SplitReducer";
import { compressReducer } from "./Pages/CompressReducer";
import { JPGtoPDFReducer } from "./Pages/JPGToPDFReducer";
import { EXCELtoPDFReducer } from "./Pages/EXCELToPDFReducer";
import { PDFtoJPGReducer } from "./Pages/PDFToJPGReducer";
import { repairReducer } from "./Pages/RepairPDFReducer";
import { rotateReducer } from "./Pages/RotatePDFReducer";
import { addWatermarkReducer } from "./Pages/AddWaterMarkReducer";
import { unlockReducer } from "./Pages/UnlockPDFReducer";
import { protectReducer } from "./Pages/ProtectPDFReducer";

const rootReducer = combineReducers({
  mainReducers,
  detailsReducer,
  premiumReducers,
  footerReducer,
  mergeReducer,
  splitReducer,
  compressReducer,
  JPGtoPDFReducer,
  EXCELtoPDFReducer,
  PDFtoJPGReducer,
  repairReducer,
  rotateReducer,
  addWatermarkReducer,
  unlockReducer,
  protectReducer,
});

export default rootReducer;
